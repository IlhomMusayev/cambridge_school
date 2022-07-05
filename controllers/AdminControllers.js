const { compareHash } = require("../modules/bcript");
const { genereteToken } = require("../modules/jwt");
const Sequelize = require("sequelize");
const moment = require("moment");
const slug = require("slug");
const path = require("path");

const {
  CreateEventsValidation,
  CreateNewsValidation,
} = require("../modules/validation");

module.exports = class AdminController {
  // LOGIN CONTROLLER

  static async LoginAdminGetController(req, res, next) {
    res.render("adminLogin", {});
  }
  static async LoginPostController(req, res, next) {
    try {
      const { admin_email, admin_password } = req.body;

      const user = await req.db.admins.findOne({
        where: {
          admin_email,
        },
        raw: true,
      });

      if (!user) {
        res.render("adminLogin", {
          ok: false,
          message: "User not found",
        });
        return;
      }
      if (!(await compareHash(admin_password, user.admin_password))) {
        res.render("adminLogin", {
          ok: false,
          message: "Invalid password",
        });
        return;
      }

      await req.db.sessions.destroy({
        where: {
          session_useragent: req.headers["user-agent"] || "Unknown",
          admin_id: user.admin_id,
        },
      });

      const session = await req.db.sessions.create({
        session_useragent: req.headers["user-agent"] || "Unknown",
        admin_id: user.admin_id,
      });

      const token = await genereteToken({
        session_id: session.dataValues.session_id,
      });

      if (!token) {
        res.render("adminLogin", {
          ok: false,
          message: "Token generate error",
        });
        return;
      }

      res.cookie("adminToken", token).redirect("/admin");
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  // DASHBOARD CONTROLLER

  static async DashboardController(req, res, next) {
    const admissions = await req.db.adminssions.count({});
    const news = await req.db.news.count({});
    const events = await req.db.events.count({});

    console.log(admissions);
    res.render("admin", {
      admissions,
      news,
      events,
    });
  }

  static async StatisticsController(req, res, next) {
    const orders = await req.db.adminssions.findAll({
      raw: true,
    });
    let data = [];
    let labels = [];
    for (let i = 6; i >= 0; i--) {
      labels.push(
        moment(new Date())
          .subtract(i, "days")
          .locale("uz-latn")
          .format("MMMM Do YYYY")
      );
      let count = 0;
      orders.forEach((order) => {
        if (
          moment(order.createdAt).format("MMMM Do YYYY") ===
          moment(new Date()).subtract(i, "days").format("MMMM Do YYYY")
        ) {
          count++;
        }
      });
      data.push(count);
    }
    res.status(200).json({
      data,
      labels,
    });
  }
  // News CONTROLLER
  static async NewsGetController(req, res, next) {
    try {
      const limit = req.query.limit || 10;
      let offset = req.query.offset - 1 || 0;

      const newsCount = await req.db.news.findAll({});
      console.log(newsCount);
      const count = Math.ceil(newsCount.length / limit);
      if (offset < 0) {
        offset = 0;
      }

      const news = await req.db.news.findAll({
        limit,
        offset: offset * limit,
        order: [["createdAt", "DESC"]],
      });
      console.log(news);
      res.render("adminNews", {
        news,
        limit,
        offset,
        count,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
  static async NewsPostController(req, res, next) {
    try {
      const data = await CreateNewsValidation(req.body);

      const imgName = req.files.new_image.name.split(".");
      const filename =
        req.files.new_image.md5 + "." + imgName[imgName.length - 1];

      const news = await req.db.news.create({
        new_slug: slug(data.new_title_eng),
        new_title_uz: data.new_title_uz,
        new_title_ru: data.new_title_ru,
        new_title_eng: data.new_title_eng,
        new_subtitle_uz: data.new_subtitle_uz,
        new_subtitle_ru: data.new_subtitle_ru,
        new_subtitle_eng: data.new_subtitle_eng,
        new_content_uz: data.new_content_uz,
        new_content_ru: data.new_content_ru,
        new_content_eng: data.new_content_eng,
        new_image: filename,
      });

      await req.files.new_image.mv(
        path.join(__dirname, "..", "public", "files", filename)
      );

      res.status(201).json({
        ok: true,
        message: "News created successfully",
        data: {
          news,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This product already exists",
        });
      }
      console.log(error);
      next(error);
    }
  }
  static async NewsPutController(req, res, next) {
    try {
      const data = await req.body;

      const imgName = req.files.new_image.name.split(".");
      const filename =
        req.files.new_image.md5 + "." + imgName[imgName.length - 1];

      const news = await req.db.news.update(
        {
          new_slug: slug(data.new_title_eng),
          new_title_uz: data.new_title_uz,
          new_title_ru: data.new_title_ru,
          new_title_eng: data.new_title_eng,
          new_subtitle_uz: data.new_subtitle_uz,
          new_subtitle_ru: data.new_subtitle_ru,
          new_subtitle_eng: data.new_subtitle_eng,
          new_content_uz: data.new_content_uz,
          new_content_ru: data.new_content_ru,
          new_content_eng: data.new_content_eng,
          new_image: filename,
        },
        {
          where: {
            new_id: data.new_id,
          },
        }
      );

      await req.files.new_image.mv(
        path.join(__dirname, "..", "public", "files", filename)
      );

      res.status(201).json({
        ok: true,
        message: "News updated successfully",
        data: {
          news,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This product already exists",
        });
      }
      next(error);
      console.log(error);
    }
  }
  static async NewsDeleteController(req, res, next) {
    try {
      const { new_id } = req.body;

      const newItem = await req.db.news.destroy({
        paranoid: true,
        where: {
          new_id: new_id,
        },
      });

      res.status(200).json({
        ok: true,
        message: "Deleted new successfully",
      });
      // res.redirect("/admin/catalog");
    } catch (error) {
      next(error);
    }
  }

  // News CONTROLLER
  static async EventGetController(req, res, next) {
    try {
      const limit = req.query.limit || 10;
      let offset = req.query.offset - 1 || 0;

      const eventsCount = await req.db.news.findAll({});
      const count = Math.ceil(eventsCount.length / limit);
      if (offset < 0) {
        offset = 0;
      }

      const branchs = await req.db.branchs.findAll({
        order: [["branch_id", "DESC"]],
      });

      const events = await req.db.events.findAll({
        limit,
        offset: offset * limit,
        order: [["createdAt", "DESC"]],
      });
      res.render("adminEvents", {
        events,
        limit,
        offset,
        count,
        branchs,
      });
    } catch (error) {
      next(error);
      console.log(error + "");
    }
  }
  static async EventPostController(req, res, next) {
    try {
      const data = await CreateEventsValidation(req.body);

      const imgName = req.files.event_image.name.split(".");
      const filename =
        req.files.event_image.md5 + "." + imgName[imgName.length - 1];

      const events = await req.db.events.create({
        branch_id: data.branch_id,
        event_slug: slug(data.event_title_eng),
        event_title_uz: data.event_title_uz,
        event_title_ru: data.event_title_ru,
        event_title_eng: data.event_title_eng,
        event_subtitle_uz: data.event_subtitle_uz,
        event_subtitle_ru: data.event_subtitle_ru,
        event_subtitle_eng: data.event_subtitle_eng,
        event_content_uz: data.event_content_uz,
        event_content_ru: data.event_content_ru,
        event_content_eng: data.event_content_eng,
        event_image: filename,
      });

      await req.files.event_image.mv(
        path.join(__dirname, "..", "public", "files", filename)
      );

      res.status(201).json({
        ok: true,
        message: "Events created successfully",
        data: {
          events,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This product already exists",
        });
      }
      console.log(error);
      next(error);
    }
  }
  static async EventPutController(req, res, next) {
    try {
      const data = await req.body;

      const imgName = req.files.event_image.name.split(".");
      const filename =
        req.files.event_image.md5 + "." + imgName[imgName.length - 1];

      const events = await req.db.events.update(
        {
          event_slug: slug(data.event_title_eng),
          event_title_uz: data.event_title_uz,
          event_title_ru: data.event_title_ru,
          event_title_eng: data.event_title_eng,
          event_subtitle_uz: data.event_subtitle_uz,
          event_subtitle_ru: data.event_subtitle_ru,
          event_subtitle_eng: data.event_subtitle_eng,
          event_content_uz: data.event_content_uz,
          event_content_ru: data.event_content_ru,
          event_content_eng: data.event_content_eng,
          event_image: filename,
        },
        {
          where: {
            event_id: data.event_id,
          },
        }
      );

      await req.files.event_image.mv(
        path.join(__dirname, "..", "public", "files", filename)
      );

      res.status(201).json({
        ok: true,
        message: "Events updated successfully",
        data: {
          events,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This product already exists",
        });
      }
      next(error);
      console.log(error);
    }
  }
  static async EventDeleteController(req, res, next) {
    try {
      const { event_id } = req.body;

      const eventItem = await req.db.events.destroy({
        paranoid: true,
        where: {
          event_id: event_id,
        },
      });

      res.status(200).json({
        ok: true,
        message: "Deleted event successfully",
      });
      // res.redirect("/admin/catalog");
    } catch (error) {
      next(error);
    }
  }

  // Branch CONTROLLER
  static async BranchController(req, res, next) {
    const limit = req.query.limit || 10;
    let offset = req.query.offset - 1 || 0;

    const branchsCount = await req.db.branchs.findAll({});
    const count = Math.ceil(branchsCount.length / limit);
    if (offset < 0) {
      offset = 0;
    }

    const branchs = await req.db.branchs.findAll({
      limit,
      offset: offset * limit,
      order: [["createdAt", "DESC"]],
    });
    res.render("adminBranch", {
      branchs,
      limit,
      offset,
      count,
    });
  }
  static async BranchPostController(req, res, next) {
    try {
      const data = await req.body;

      const branchGradesArray = data.branch_grades.split(",");
      const branchs = await req.db.branchs.create({
        branch_name: data.branch_name,
        branch_slug: slug(data.branch_name),
        branch_grades: branchGradesArray,
        branch_phone: data.branch_phone,
        branch_location_link: data.branch_location_link,
      });

      res.status(201).json({
        ok: true,
        message: "Branch created successfully",
        data: {
          branchs,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This branch already exists",
        });
      }
      console.log(error);
      next(error);
    }
  }
  static async BranchPutController(req, res, next) {
    try {
      const data = await req.body;
      const branchGradesArray = data.branch_grades.split(",");
      const branchs = await req.db.branchs.update(
        {
          branch_name: data.branch_name,
          branch_slug: slug(data.branch_name),
          branch_grades: branchGradesArray,
          branch_phone: data.branch_phone,
          branch_location_link: data.branch_location_link,
        },
        {
          where: {
            branch_id: data.branch_id,
          },
        }
      );

      res.status(201).json({
        ok: true,
        message: "Branch update successfully",
        data: {
          branchs,
        },
      });
    } catch (error) {
      if (error.message == "Validation error") {
        res.status(201).json({
          ok: false,
          message: "This branch already exists",
        });
      }
      console.log(error);
      next(error);
    }
  }
  static async BranchDeleteController(req, res, next) {
    try {
      const { branch_id } = req.body;

      const branch = await req.db.branchs.destroy({
        paranoid: true,
        where: {
          branch_id: branch_id,
        },
      });

      res.status(200).json({
        ok: true,
        message: "Deleted new successfully",
      });
      // res.redirect("/admin/catalog");
    } catch (error) {
      next(error);
    }
  }

  // Adminssion get controller
  static async AdminssionGetController(req, res, next) {
    try {
      const limit = req.query.limit || 10;
      let offset = req.query.offset - 1 || 0;

      const adminssionsCount = await req.db.adminssions.findAll({});
      const count = Math.ceil(adminssionsCount.length / limit);
      if (offset < 0) {
        offset = 0;
      }
      const adminssions = await req.db.adminssions.findAll({
        limit,
        offset: offset * limit,
        order: [["createdAt", "DESC"]],
      });
      res.render("adminOrder", {
        adminssions,
        limit,
        offset,
        count,
      });
    } catch (error) {
      next(error);
    }
  }
  static async AdminsssionGetByIdController(req, res, next) {
    try {
      const { adminssion_id } = req.params;
      const adminssion = await req.db.adminssions.findOne({
        where: {
          adminssion_id: adminssion_id,
        },
        include: [
          {
            model: req.db.branchs,
          },
        ],
      });
      console.log(adminssion.dataValues.branch.dataValues.branch_name);
      res.render("adminApplicationSingle", {
        adminssion,
      });
    } catch (error) {
      next(error);
    }
  }
};
