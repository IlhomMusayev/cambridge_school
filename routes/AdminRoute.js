const {
  DashboardController,
  LoginAdminGetController,
  LoginPostController,
  NewsGetController,
  NewsPostController,
  NewsPutController,
  NewsDeleteController,
  EventGetController,
  EventPostController,
  EventPutController,
  EventDeleteController,
  BranchController,
  BranchPostController,
  AdminssionGetController,
  AdminsssionGetByIdController,
  StatisticsController,
  BranchDeleteController,
  BranchPutController,
} = require("../controllers/AdminControllers");
const { AdminMiddleware } = require("../middlewares/authMiddleware");
const expressFileUpload = require("express-fileupload");

const router = require("express").Router();
// Dashboard Route
router.get("/", AdminMiddleware, DashboardController);

// // news routes
router.get("/news", AdminMiddleware, NewsGetController);
router.post("/news", AdminMiddleware, expressFileUpload(), NewsPostController);
router.put("/news", AdminMiddleware, expressFileUpload(), NewsPutController);
router.delete("/news", AdminMiddleware, NewsDeleteController);

// // events routes
router.get("/events", AdminMiddleware, EventGetController);
router.post(
  "/events",
  AdminMiddleware,
  expressFileUpload(),
  EventPostController
);
router.put("/events", AdminMiddleware, expressFileUpload(), EventPutController);
router.delete("/events", AdminMiddleware, EventDeleteController);

// branch routes
router.get("/branchs", AdminMiddleware, BranchController);
router.post("/branchs", AdminMiddleware, BranchPostController);
router.put("/branchs", AdminMiddleware, BranchPutController);
router.delete("/branchs", AdminMiddleware, BranchDeleteController);

// adminssions routes
router.get("/adminssions", AdminMiddleware, AdminssionGetController);
router.get(
  "/adminssions/:adminssion_id",
  AdminMiddleware,
  AdminsssionGetByIdController
);

router.get("/statisctics", AdminMiddleware, StatisticsController);

// login routes
router.get("/login", LoginAdminGetController);
router.post("/login", LoginPostController);

module.exports = router;
