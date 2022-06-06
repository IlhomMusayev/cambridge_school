const router = require("express").Router();
const { LocationGetController } = require("../controllers/LocationsControllers");

router.get("/", LocationGetController);

module.exports = router;
