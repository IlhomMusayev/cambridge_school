const moment = require("moment");
const { Op } = require("sequelize");
const newsLanguage = require("../public/assets/languages/NewsLanguage.json");

module.exports = class NewsController {
  static async NewGetController(req, res) {
    const new_slug = req.params.new_slug;
    const newItem = await req.db.news.findOne({
      raw: true,
      where: {
        new_slug: new_slug,
      },
    });
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
    const allNews = await req.db.news.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });

    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }

    console.log(newItem);
    res.render("news", {
      newsLanguage,
      lan,
      newItem,
      lastNews,
      allNews,
    });
  }
};
