import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fs from "fs";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouters";
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

// Add your magic here!
app.use(localsMiddleware);
app.use("/texts", express.static("texts"));
app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
