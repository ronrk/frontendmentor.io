const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task must contain a title"],
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please login/sign-up"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
