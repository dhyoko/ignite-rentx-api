import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

dotenv.config();

interface IConfig {
  isMigration: boolean;
}

export function getConfig({ isMigration }: IConfig): DataSourceOptions {
  return {
    type: process.env.TYPEORM_CONNECTION,
    host: isMigration
      ? process.env.TYPEORM_LOCAL_MIGRATION_HOST
      : process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: ["./src/database/migrations/*.{ts,js}"],
    entities: [Category, Specification, User],
  } as DataSourceOptions;
}
