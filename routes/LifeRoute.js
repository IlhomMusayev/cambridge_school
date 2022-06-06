const router = require("express").Router();
const { LifeGetController } = require("../controllers/LifeControllers");

router.get("/", LifeGetController);

module.exports = router;
