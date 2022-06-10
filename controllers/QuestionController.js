const moment = require("moment");
const axios = require("axios");

require("dotenv").config();
const token = process.env.BOT_TOKEN;
const group_id = process.env.GROUP_ID;
module.exports = class QuestionController {
  static async QuesionPostController(req, res, next) {
    try {
      const data = await req.body;
      console.log(data);
      let response = await axios.get(
        encodeURI(
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=${group_id}&text= ❔ New Question\n\n<b>👤 Name:</b> ${data.name}\n<b>📞 Mail address:</b> ${data.email}\n<b>📩 Message:</b>${data.message}\n&parse_mode=html`
        )
      );
      res.status(200).json({
        ok: true,
        message: "Success",
      });
    } catch (error) {
      next(error);
    }
  }
};
