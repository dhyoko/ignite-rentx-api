import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementation/SpecificationRepository";

@injectable()
class ListAllSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    return this.specificationsRepository.list();
  }
}

export { ListAllSpecificationsUseCase };
