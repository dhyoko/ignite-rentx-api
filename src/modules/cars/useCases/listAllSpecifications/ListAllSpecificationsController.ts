import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllSpecificationsUseCase } from "./ListAllSpecificationsUseCase";

class ListAllSpecificationsController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listAllSpecificationsUseCase = container.resolve(
      ListAllSpecificationsUseCase
    );
    const specifications = await listAllSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListAllSpecificationsController };
