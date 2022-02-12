import { Router } from "express";
import { Health } from "../../controllers";

const routes = Router();

routes.get("/health", Health);

export default routes;
