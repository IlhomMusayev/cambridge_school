const HomeRoute = require("./HomeRoute");
const AboutRoute = require("./AboutRoute");
const LifeRoute = require("./LifeRoute");
const AdminssionRoute = require("./AdminssionRoute");
const NewsRoute = require("./NewsRoute");
const EventRoute = require("./EventsRoute");
const LocationRoute = require("./LocationRoute");
const AdminRoute = require("./AdminRoute");
const BranchRoute = require("./BranchRoute");
const QuestionRoute = require("./QuestionRoute");
const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
  try {
    app.use("/", HomeRoute);
    app.use("/about", AboutRoute);
    app.use("/life", LifeRoute);
    app.use("/admission", AdminssionRoute);
    app.use("/news", NewsRoute);
    app.use("/locations", LocationRoute);
    app.use("/events", EventRoute);
    app.use("/branch", BranchRoute);
    app.use("/admin", AdminRoute);
    app.use("/question", QuestionRoute);
    app.use((req, res) => {
      res.render("404", {});
    });
  } finally {
    app.use(errorHandler);
  }
};
