import { Request, Response } from "express";

import { ListAllSpecificationsUseCase } from "./ListAllSpecificationsUseCase";

class ListAllSpecificationsController {
  constructor(
    private listAllSpecificationsUseCase: ListAllSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listAllSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListAllSpecificationsController };
