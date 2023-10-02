import { Request, Response } from "express";

import { ListAllCategoriesUseCase } from "./ListAllCategoriesUseCase";

class ListAllCategoriesController {
  constructor(private listCategoriesUseCase: ListAllCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    return response.json(categories);
  }
}

export { ListAllCategoriesController };
