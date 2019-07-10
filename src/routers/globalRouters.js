import express from "express";
import { getHome, postHome } from "../controllers/globalControllers";
import routes from "../routes";
import { uploadText } from "../middlewares";
const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.post(routes.home, uploadText, postHome);

export default globalRouter;
