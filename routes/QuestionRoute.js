const { QuesionPostController } = require("../controllers/QuestionController");

const router = require("express").Router();

router.post("/", QuesionPostController);

module.exports = router;
