import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

dotenv.config();

const DB_PATHS = {
  MIGRATIONS: "./src/shared/infra/typeorm/migrations/*.{ts,js}",
  SEEDS: "./src/shared/infra/typeorm/seeds/*.{ts,js}",
};

interface IParam {
  isMigration?: boolean;
  isSeed?: boolean;
}

export function getConfig({
  isMigration = true,
  isSeed = false,
}: IParam): DataSourceOptions {
  const host = isMigration
    ? process.env.TYPEORM_LOCAL_MIGRATION_HOST
    : process.env.TYPEORM_HOST;
  const migrationsPath = isSeed ? DB_PATHS.SEEDS : DB_PATHS.MIGRATIONS;

  return {
    type: process.env.TYPEORM_CONNECTION,
    host,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: [migrationsPath],
    entities: ["./src/modules/**/entities/*.ts"],
  } as DataSourceOptions;
}
