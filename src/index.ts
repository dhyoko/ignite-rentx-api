import express from "express";

import { categoriesRoutes } from "./routes/categories.route";
import { specificationRoutes } from "./routes/specifications.route";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

export { app };
