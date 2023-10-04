import express from "express";
import "dotenv/config";

import dataSource from "./database";
import { categoriesRoutes } from "./routes/categories.route";
import { specificationRoutes } from "./routes/specifications.route";

const app = express();

app.use(express.json());

dataSource
  .initialize()
  .then(() => console.log("Data source successfully started!"))
  .catch((error) => console.log(error));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

export { app };
