import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category Already Exists", 400);
    }

    const category = await this.categoryRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryUseCase };
