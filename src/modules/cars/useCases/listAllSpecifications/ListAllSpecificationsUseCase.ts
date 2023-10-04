import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementation/SpecificationRepository";

class ListAllSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { ListAllSpecificationsUseCase };
