const router = require("express").Router();
const { EventGetController } = require("../controllers/EventController");

router.get("/:event_slug", EventGetController);

module.exports = router;
