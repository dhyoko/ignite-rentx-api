import dotenv from "dotenv";
import { DataSource } from "typeorm";

import { getConfig } from "./data-source.config";

dotenv.config();

const dataSource = new DataSource(getConfig({ isMigration: true }));

export default dataSource;
