const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: [true, "A task with this name already exists"]
    },
    description: {
      type: String,
      required: true
    },
    deadline: {
        type: Date,
    },
    attachments: {
        type: String,
    },
    userId: {
      type: Schema.Types.ObjectId, 
      ref: 'User' 
    }
  },
  {
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;