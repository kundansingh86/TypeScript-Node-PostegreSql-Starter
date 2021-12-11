import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares";
import { userOnboardingController } from "./controllers";

const app = express();

// Configure Express to use express-react-views
app.set("views", __dirname + "/views");
app.set("view engine", "tsx");
app.engine("tsx", require("express-react-views").createEngine());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    secure: false,
  })
);

app.use(userOnboardingController);
app.use(errorHandler);
export { app };
