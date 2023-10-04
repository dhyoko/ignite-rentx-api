import { Request, Response } from "express";

import { ListAllCategoriesUseCase } from "./ListAllCategoriesUseCase";

class ListAllCategoriesController {
  constructor(private listCategoriesUseCase: ListAllCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCase.execute();
    return response.json(categories);
  }
}

export { ListAllCategoriesController };
