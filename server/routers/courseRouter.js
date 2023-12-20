const router = require("express").Router();
const courseController = require("../controllers/courseController");
const requireUser = require("../middlewares/requireUser");

router.get("/all", requireUser, courseController.getAllCourseController);

module.exports = router;
