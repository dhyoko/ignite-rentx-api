import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listAllCategoriesController } from "../modules/cars/useCases/listAllCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);
categoriesRoutes.get("/", (request, response) =>
  listAllCategoriesController.handle(request, response)
);

export { categoriesRoutes };
