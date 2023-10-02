import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
  list(): Specification[];
}

export { ISpecificationDTO, ISpecificationsRepository };
