import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

dotenv.config();

export function getConfig(): DataSourceOptions {
  return {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: ["./src/database/migrations/*.ts"],
  } as DataSourceOptions;
}
