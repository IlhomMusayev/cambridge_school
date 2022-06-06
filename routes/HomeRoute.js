const router = require("express").Router();
const { HomeGetController } = require("../controllers/HomeController");

router.get("/", HomeGetController);

module.exports = router;
