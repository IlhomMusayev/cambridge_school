const slug = require("slug");
const path = require("path");
const moment = require("moment");
const { Op } = require("sequelize");
const { CreateAdminssionValidation } = require("../modules/validation");
const admissionLanguage = require("../public/assets/languages/admissionLanguage.json");

module.exports = class AdminssionController {
  static async AdminssionGetController(req, res) {
    let lan = "eng";
    if (req.language.toString() === "ru") {
      lan = "ru";
    } else if (req.language.toString() === "uz") {
      lan = "uz";
    }
    const branchs = await req.db.branchs.findAll({
      raw: true,
    });

    
    res.render("adminssion", {
      branchs,
      admissionLanguage,
      lan,
    });
  }

  static async AdminssionPostController(req, res, next) {
    try {
      const data = await CreateAdminssionValidation(req.body);
      // grade sertificate
      const adminssion_user_grade_certificate =
        req.files.adminssion_user_grade_certificate.name.split(".");
      const adminssion_user_grade_certificate_filename =
        req.files.adminssion_user_grade_certificate.md5 +
        "." +
        adminssion_user_grade_certificate[
          adminssion_user_grade_certificate.length - 1
        ];
      // user pasport
      const adminssion_user_passport =
        req.files.adminssion_user_passport.name.split(".");
      const adminssion_user_passport_filename =
        req.files.adminssion_user_passport.md5 +
        "." +
        adminssion_user_passport[adminssion_user_passport.length - 1];
      // parents pasport
      const adminssion_user_partents_passport =
        req.files.adminssion_user_partents_passport.name.split(".");
      const adminssion_user_partents_passport_filename =
        req.files.adminssion_user_partents_passport.md5 +
        "." +
        adminssion_user_partents_passport[
          adminssion_user_partents_passport.length - 1
        ];

      // create adminssion

      const adminssion = await req.db.adminssions.create({
        branch_id: data.branch_id,
        adminssion_user_fullname: data.adminssion_user_fullname,
        adminssion_user_email: data.adminssion_user_email,
        adminssion_user_phone: data.adminssion_user_phone,
        adminssion_user_birthdate: data.adminssion_user_birthdate,
        adminssion_user_grade: data.adminssion_user_grade,
        adminssion_user_english_degree: data.adminssion_user_english_degree,
        adminssion_user_region: data.adminssion_user_region,
        adminssion_user_address: data.adminssion_user_address,
        adminssion_user_partents_fullname:
          data.adminssion_user_partents_fullname,
        adminssion_user_partents_phone: data.adminssion_user_partents_phone,
        adminssion_user_grade_certificate:
          adminssion_user_grade_certificate_filename,
        adminssion_user_passport: adminssion_user_passport_filename,
        adminssion_user_partents_passport:
          adminssion_user_partents_passport_filename,
      });

      // upload grade certificate
      await req.files.adminssion_user_grade_certificate.mv(
        path.join(
          __dirname,
          "..",
          "public",
          "files",
          adminssion_user_grade_certificate_filename
        )
      );
      await req.files.adminssion_user_passport.mv(
        path.join(
          __dirname,
          "..",
          "public",
          "files",
          adminssion_user_passport_filename
        )
      );
      await req.files.adminssion_user_partents_passport.mv(
        path.join(
          __dirname,
          "..",
          "public",
          "files",
          adminssion_user_partents_passport_filename
        )
      );

      res.status(200).json({
        ok: true,
        message: "Adminssion created",
        data: {
          adminssion,
        },
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
};
