function AuthMiddleware(req, res, next) {
  if (!req.session) {
    res.redirect("/login");
  } else {
    next();
  }
}

function AdminMiddleware(req, res, next) {
  if (!req.admin) {
    res.redirect("/admin/login");
  } else {
    next();
  }
}

module.exports = { AuthMiddleware, AdminMiddleware };
