import { inject, injectable } from "tsyringe";

import { AppError } from "@/shared/errors/AppError";

import { Specification } from "../../infra/typeorm/entities/Specification";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<Specification> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification Already Exists!", 400);
    }

    const specification = await this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
