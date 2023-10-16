import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@/modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "@/shared/errors/AppError";

const ensureAdmin = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user?.is_admin) {
    throw new AppError("User is not an admin");
  }

  next();
};

export { ensureAdmin };
