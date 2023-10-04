import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

class ListAllCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}

export { ListAllCategoriesUseCase };
