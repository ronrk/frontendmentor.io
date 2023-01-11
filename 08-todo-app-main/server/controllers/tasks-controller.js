const Task = require("../models/Task");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ tasks });
};

const createTask = async (req, res) => {
  console.log(req.user);
  req.body.createdBy = req.user.userId;
  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
};

const getTask = async (req, res) => {
  const {
    user: { userId },
    params: { taskId },
  } = req;
  const task = await Task.findOne({ _id: taskId, createdBy: userId });

  if (!task) {
    throw new NotFoundError(`No Task with id ${taskId}`);
  }

  res.status(StatusCodes.OK).json({ task });
};

const updateTask = async (req, res) => {
  const {
    body: { title, status },
    user: { userId },
    params: { taskId },
  } = req;

  if (title === "" || status === "") {
    throw new BadRequestError("Title or Status cannot be empty");
  }

  const task = await Task.findOneAndUpdate(
    { createdBy: userId, _id: taskId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!task) {
    throw new NotFoundError(`No Task with the id : ${taskId}`);
  }

  res.status(StatusCodes.OK).json({ task });
};

const deleteTask = async (req, res) => {
  const {
    user: { userId },
    params: { taskId },
  } = req;
  const task = await Task.findByIdAndRemove({ _id: taskId, createdBy: userId });

  if (!task) {
    throw new NotFoundError(`Not task with the id ${taskId}`);
  }
  res.status(StatusCodes.OK).json({ task });
};

const deleteAllCompleted = async (req, res) => {
  const {
    user: { userId },
  } = req;
  await Task.deleteMany({ status: true });
  res.status(StatusCodes.OK).json({ status: "Success" });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllCompleted,
};
