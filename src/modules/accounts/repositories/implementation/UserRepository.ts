import { Repository } from "typeorm";

import dataSource from "../../../../database";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }
  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_license } = data;

    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UsersRepository };
