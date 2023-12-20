const Course = require("../models/Course");
const { success, error } = require("../utils/responseWrapper");

const getAllCourseController = async (req, res) => {
  const courses = await Course.find({});
  console.log("courses ", courses);

  return res.send(success(200, courses));
};

module.exports = {
  getAllCourseController,
};
