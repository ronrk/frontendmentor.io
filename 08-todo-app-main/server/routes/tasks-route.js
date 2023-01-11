const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllCompleted,
} = require("../controllers/tasks-controller");

const express = require("express");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask).delete(deleteAllCompleted);
router.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
