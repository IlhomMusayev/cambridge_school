const { Sequelize, DataTypes } = require("sequelize");
const init = require("../modules/init");
const relations = require("./relation");
require("dotenv").config();

const SessionModel = require("../models/SessionModel");
const AdminModel = require("../models/AdminModel");
const NewsModel = require("../models/NewsModel");
const BranchModel = require("../models/BranchModel");
const EventsModel = require("../models/EventsModel");
const AdminssionModel = require("../models/AdminssionModel");
const PSQL_URL = process.env.PSQL_URL;

// create the database connection
const sequelize = new Sequelize(PSQL_URL, {
  logging: false,
});

module.exports = async function postgres() {
  try {
    await sequelize.authenticate();
    let db = {};

    db.admins = await AdminModel(sequelize, Sequelize);
    db.sessions = await SessionModel(sequelize, Sequelize);
    db.branchs = await BranchModel(sequelize, Sequelize);
    db.news = await NewsModel(sequelize, Sequelize);
    db.events = await EventsModel(sequelize, Sequelize);
    db.adminssions = await AdminssionModel(sequelize, Sequelize);
    db.sequelize = await sequelize;

    await relations(db);
    await init(db);

    await sequelize.sync({ force: false });
    // await db.events.sync({ force: true });

    return db;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
