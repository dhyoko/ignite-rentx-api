import { inject, injectable } from "tsyringe";

import { Specification } from "../../infra/typeorm/entities/Specification";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationRepository";

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
