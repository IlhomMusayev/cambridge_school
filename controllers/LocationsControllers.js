const moment = require("moment");
const { Op } = require("sequelize");
const locationLanguage = require("../public/assets/languages/locationLanguage.json");

module.exports = class LocationsController {
  static async LocationGetController(req, res) {
    const branchsList = await req.db.branchs.findAll({
      raw: true,
    });

    const branch_name = req.query.branch_name;
    let branch;
    let events;
    if (branch_name) {
      let branchItem = await req.db.branchs.findOne({
        raw: true,
        where: {
          branch_slug: branch_name,
        },
      });
      if (branchItem) {
        branch = branchItem;
        events = await req.db.events.findAll({
          raw: true,
          where: {
            branch_id: branch.branch_id,
          },
        });
      } else {
        branch = await req.db.branchs.findOne({
          raw: true,
        });
        events = await req.db.events.findAll({
          raw: true,
          where: {
            branch_id: branch.branch_id,
          },
        });
      }
    } else {
      branch = await req.db.branchs.findOne({
        raw: true,
      });
      events = await req.db.events.findAll({
        raw: true,
        where: {
          branch_id: branch.branch_id,
        },
      });
    }
    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }
    res.render("locations", {
      branchsList,
      locationLanguage,
      lan,
      branch,
      events,
    });
  }
};
