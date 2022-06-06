const express = require("express");
const routes = require("./routes/routes");
const postgres = require("./modules/pg");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userMiddleware = require("./middlewares/userMiddleware");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
const adminMiddleware = require("./middlewares/adminMiddleware");
const languagesMiddleware = require("./middlewares/languagesMiddleware");

const app = express();

const PORT = process.env.PORT;
__dirname = path.resolve(path.dirname(""));

async function start() {
  try {
    app.listen(PORT, () => {
      console.log("SERVER RUNNING " + PORT + " PORT");
    });
    const db = await postgres();

    app.use(async (req, res, next) => {
      req.db = await db;
      next();
    });

    app.use(cookieParser());
    app.use(customErrorMiddleware);
    app.use(userMiddleware);
    app.use(adminMiddleware);
    app.use(languagesMiddleware);


    app.locals.moment = require("moment");

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: true }));
  } catch (error) {
    console.log(error);
  } finally {
    routes(app);
  }
}
start();
