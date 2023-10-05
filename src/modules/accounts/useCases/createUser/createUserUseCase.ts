import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../repositories/dtos/ICreateUserDTO";
import { UsersRepository } from "../../repositories/implementation/UserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_license } = data;
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
