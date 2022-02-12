import { Router } from "express";

import health from "./health";

const routes = Router();

routes.use(health);

export default routes;
