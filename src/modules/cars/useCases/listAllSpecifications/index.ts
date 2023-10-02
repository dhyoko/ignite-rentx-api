import { SpecificationsRepository } from "../../repositories/implementation/SpecificationRepository";
import { ListAllSpecificationsController } from "./ListAllSpecificationsController";
import { ListAllSpecificationsUseCase } from "./ListAllSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listAllSpecificationsUseCase = new ListAllSpecificationsUseCase(
  specificationsRepository
);
const listAllSpecificationsController = new ListAllSpecificationsController(
  listAllSpecificationsUseCase
);

export { listAllSpecificationsController };
