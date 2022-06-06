const moment = require("moment");
const { Op } = require("sequelize");
const lifeLanguage = require("../public/assets/languages/lifeLanguage.json");

module.exports = class LifeController {
  static async LifeGetController(req, res) {
    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }
    res.render("life", {
      lifeLanguage,
      lan,
    });
  }
};
