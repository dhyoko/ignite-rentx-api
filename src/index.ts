import express from "express";
import "dotenv/config";
import "reflect-metadata";

import "./shared/container";
import dataSource from "./database";
import { categoriesRoutes } from "./routes/categories.route";
import { specificationRoutes } from "./routes/specifications.route";
import { swaggerRoutes } from "./routes/swagger.routes";

const app = express();

app.use(express.json());

dataSource
  .initialize()
  .then(() => console.log("Data source successfully started!"))
  .catch((error) => console.log(error));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);
app.use("/api-docs", swaggerRoutes);

export { app };
