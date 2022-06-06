const moment = require("moment");
const { Op } = require("sequelize");

module.exports = class BranchController {
  static async BranchGetByIdController(req, res) {
    const branch_id = await req.params.branch_id;
    const branch = await req.db.branchs.findOne({
      raw: true,
      where: {
        branch_id,
      },
    });
    console.log(branch);

    res.status(200).json({
      ok: true,
      message: "Branch by id",
      data: {
        branch,
      },
    });
  }
};
