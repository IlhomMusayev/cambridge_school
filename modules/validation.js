const joi = require("joi");

const CustomError = require("../helpers/CustomError");

module.exports = class Validations {
  static async RegisterValidation(data) {
    return await joi
      .object({
        user_name: joi
          .string()
          .required()
          .max(64)
          .error(new Error(400, "Name is invalid")),
        user_phone: joi
          .string()
          .required()
          .pattern(new RegExp("^998[35789][01345789][0-9]{7}$"))
          .error(new Error(400, "Phone number is invalid")),
      })
      .validateAsync(data);
  }
  static async LoginValidation(data) {
    return await joi
      .object({
        user_phone: joi
          .string()
          .required()
          .pattern(new RegExp("^998[35789][01345789][0-9]{7}$"))
          .error(new Error(400, "Phone number is invalid")),
      })
      .validateAsync(data);
  }

  static async CreateNewsValidation(data) {
    return await joi
      .object({
        new_title_uz: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        new_title_ru: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        new_title_eng: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        new_subtitle_uz: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle name is invalid")),
        new_subtitle_ru: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle code is invalid")),
        new_subtitle_eng: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle price is invalid")),
        new_content_uz: joi
          .string()
          .required()
          .error(new Error(400, "Content name is invalid")),
        new_content_ru: joi
          .string()
          .required()
          .error(new Error(400, "Content code is invalid")),
        new_content_eng: joi
          .string()
          .required()
          .error(new Error(400, "Content price is invalid")),
      })
      .validateAsync(data);
  }

  static async CreateEventsValidation(data) {
    return await joi
      .object({
        branch_id: joi
          .string()
          .guid()
          .required()
          .error(new Error(400, "Branch id is invalid")),
        event_title_uz: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        event_title_ru: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        event_title_eng: joi
          .string()
          .required()
          .error(new Error(400, "Title name is invalid")),
        event_subtitle_uz: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle name is invalid")),
        event_subtitle_ru: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle code is invalid")),
        event_subtitle_eng: joi
          .string()
          .required()
          .error(new Error(400, "Subtitle price is invalid")),
        event_content_uz: joi
          .string()
          .required()
          .error(new Error(400, "Content name is invalid")),
        event_content_ru: joi
          .string()
          .required()
          .error(new Error(400, "Content code is invalid")),
        event_content_eng: joi
          .string()
          .required()
          .error(new Error(400, "Content price is invalid")),
      })
      .validateAsync(data);
  }

  static async CreateAdminssionValidation(data) {
    return await joi
      .object({
        branch_id: joi
          .string()
          .guid()
          .required()
          .error(new Error(400, "Branch id is invalid")),
        adminssion_user_fullname: joi
          .string()
          .required()
          .max(64)
          .error(new Error(400, "Full name name is invalid")),
        adminssion_user_email: joi
          .string()
          .required()
          .error(new Error(400, "Email name is invalid")),
        adminssion_user_phone: joi
          .string()
          .required()
          .error(new Error(400, "Phone number is invalid")),
        adminssion_user_birthdate: joi
          .string()
          .required()
          .error(new Error(400, "Birthday is invalid")),
        adminssion_user_grade: joi
          .string()
          .required()
          .error(new Error(400, "User grade is invalid")),
        adminssion_user_english_degree: joi
          .string()
          .required()
          .error(new Error(400, "English degree is invalid")),
        adminssion_user_region: joi
          .string()
          .required()
          .error(new Error(400, "Region degree is invalid")),
        adminssion_user_address: joi
          .string()
          .required()
          .error(new Error(400, "Address is invalid")),
        adminssion_user_partents_fullname: joi
          .string()
          .required()
          .max(64)
          .error(new Error(400, "Parents full name is invalid")),
        adminssion_user_partents_phone: joi
          .string()
          .required()
          .error(new Error(400, "Parents phone number is invalid")),
      })
      .validateAsync(data);
  }
};
