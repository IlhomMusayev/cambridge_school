const router = require("express").Router();
const { NewGetController } = require("../controllers/NewsControllers");

router.get("/:new_slug", NewGetController);

module.exports = router;
