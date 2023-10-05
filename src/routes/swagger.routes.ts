import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";

const swaggerRoutes = Router();

const swaggerOptions = {
  swaggerOptions: {
    defaultModelsExpandDepth: -1,
  },
};

swaggerRoutes.use("/", swaggerUi.serve);
swaggerRoutes.get("/", swaggerUi.setup(swaggerFile, swaggerOptions));

export { swaggerRoutes };
