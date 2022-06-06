const router = require("express").Router();
const { BranchGetByIdController } = require("../controllers/BranchController");

router.get("/:branch_id", BranchGetByIdController);

module.exports = router;
