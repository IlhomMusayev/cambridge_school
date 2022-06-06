const moment = require("moment");
const { Op } = require("sequelize");
const AboutLanguage = require("../public/assets/languages/AboutLanguage.json");

module.exports = class AboutController {
  static async AboutGetController(req, res) {
    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }
    res.render("about", {
      AboutLanguage,
      lan,
    });
  }
};
