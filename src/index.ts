import express from "express";

import { categoriesRoutes } from "./routes/categories.route";

const app = express();

app.use(express.json());

app.use("/categoriesRoutes", categoriesRoutes);

export { app };
