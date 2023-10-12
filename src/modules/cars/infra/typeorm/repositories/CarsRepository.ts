import { Repository } from "typeorm";

import { ICreateCarDTO } from "@/modules/cars/dtos/ICreateCarsDTO";
import { ICarsRepository } from "@/modules/cars/repositories/ICarsRepository";
import dataSource from "@/shared/infra/typeorm";

import { Car } from "../entities/Cars";

class CarsRepository implements ICarsRepository {
  repository: Repository<Car>;

  constructor() {
    this.repository = dataSource.getRepository(Car);
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    const {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    } = data;

    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({
      where: {
        license_plate,
      },
    });
  }
}

export { CarsRepository };
