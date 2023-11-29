const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const taskSchema = new Schema(
  {
    tasklist: {
      type: String,
      required: [true, "Title is required"],
      unique: [true, "A task with this name already exists"]
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;