import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listAllSpecificationsController } from "../modules/cars/useCases/listAllSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) =>
  createSpecificationController.handle(request, response)
);
specificationRoutes.get("/", (request, response) =>
  listAllSpecificationsController.handle(request, response)
);

export { specificationRoutes };
