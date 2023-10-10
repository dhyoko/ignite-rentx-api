import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListAllSpecificationsController } from "@modules/cars/useCases/listAllSpecifications/ListAllSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listAllSpecificationsController = new ListAllSpecificationsController();

specificationRoutes.post("/", createSpecificationController.handle);
specificationRoutes.get("/", listAllSpecificationsController.handle);

export { specificationRoutes };
