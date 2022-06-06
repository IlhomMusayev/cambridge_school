const router = require("express").Router();
const { AboutGetController } = require("../controllers/AboutControllers");

router.get("/", AboutGetController);

module.exports = router;
