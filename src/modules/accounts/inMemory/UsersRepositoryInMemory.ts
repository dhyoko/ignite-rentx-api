import { User } from "../entities/User";
import { ICreateUserDTO } from "../repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_license } = data;

    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      driver_license,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };
