import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

class ListAllCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListAllCategoriesUseCase };
