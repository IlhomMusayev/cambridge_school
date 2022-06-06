const {
  AdminssionGetController,
  AdminssionPostController,
} = require("../controllers/AdminssionController");
const expressFileUpload = require("express-fileupload");

const router = require("express").Router();
router.get("/", AdminssionGetController);
router.post("/", expressFileUpload(), AdminssionPostController);

module.exports = router;
