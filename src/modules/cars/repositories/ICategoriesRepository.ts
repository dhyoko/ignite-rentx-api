import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category | undefined;
  list(): Category[];
}

export { ICategoryRepository, ICreateCategoryDTO };
