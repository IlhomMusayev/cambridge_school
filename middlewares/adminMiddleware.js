const { checkToken } = require("../modules/jwt");

module.exports = async function AdminMiddleware(req, res, next) {
  try {
    let token = req.cookies.adminToken;
    if (!token) {
      throw new Error(401, "Token not found");
    }

    token = checkToken(token);

    if (!token) {
      throw new Error(401, "Token not valid");
    }

    const admin = await req.db.sessions.findOne({
      where: {
        session_id: token.session_id,
      },
      include: req.db.admins,
      raw: true,
    });

    if (!admin) {
      throw new res.error(401, "Session isn't found");
    }

    // console.log(user);
    req.admin = await admin;

    next();
  } catch (error) {
    next();
  }
};
