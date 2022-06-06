const moment = require("moment");
const { Op } = require("sequelize");
const eventsLanguage = require("../public/assets/languages/EventsLanguage.json");

module.exports = class EventController {
  static async EventGetController(req, res) {
    const event_slug = req.params.event_slug;
    const eventItem = await req.db.events.findOne({
      raw: true,
      where: {
        event_slug: event_slug,
      },
    });
    const lastEvents = await req.db.events.findAll({
      raw: true,
      where: {
        createdAt: {
          [Op.gte]: moment().subtract(30, "days").toDate(),
        },
      },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    const allEvents = await req.db.events.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });

    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }

    res.render("events", {
      eventsLanguage,
      lan,
      eventItem,
      lastEvents,
      allEvents,
    });
  }
};
