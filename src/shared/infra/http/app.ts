import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "dotenv/config";
import "reflect-metadata";

import { AppError } from "@errors/AppError";

import "@shared/container";
import dataSource from "../typeorm";
import { authenticateRoutes } from "./routes/authenticate.route";
import { categoriesRoutes } from "./routes/categories.route";
import { specificationRoutes } from "./routes/specifications.route";
import { swaggerRoutes } from "./routes/swagger.routes";
import { usersRoutes } from "./routes/users.route";

const app = express();

app.use(express.json());

dataSource
  .initialize()
  .then(() => console.log("Data source successfully started!"))
  .catch((error) => console.log(error));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);
app.use("/api-docs", swaggerRoutes);
app.use("/users", usersRoutes);
app.use("/sessions", authenticateRoutes);

app.use((err: Error, _: Request, response: Response, __: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    error: `Internal server error - ${err.message}`,
  });
});

export { app };
