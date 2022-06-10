const moment = require("moment");
const { Op } = require("sequelize");
const HomeLanguages = require("../public/assets/languages/homeLanguages.json");

module.exports = class HomeController {
  static async HomeGetController(req, res, next) {
    try {
      const lastNews = await req.db.news.findAll({
        raw: true,
        where: {
          createdAt: {
            [Op.gte]: moment().subtract(30, "days").toDate(),
          },
        },
        order: [["createdAt", "DESC"]],
        limit: 5,
      });

      let lan = "eng";
      if (req.language.toString() === "ru") {
        lan = "ru";
      } else if (req.language.toString() === "uz") {
        lan = "uz";
      }

      const branchs = await req.db.branchs.findAll({
        raw: true,
      });

      res.render("index", {
        lastNews,
        HomeLanguages,
        lan,
        branchs,
      });
    } catch (error) {
      next(error);
    }
  }
};
