import multer from "multer";
import routes from "./routes";
const multerDetail = multer({ dest: "texts/details/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "love Nico";
  res.locals.routes = routes;
  next();
};

export const uploadText = multerDetail.single("textFile");
