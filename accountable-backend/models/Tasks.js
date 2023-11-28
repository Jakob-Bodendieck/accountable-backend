const { Schema, model } = require("mongoose");
// TODO: Please make sure you edit the User model to whatever makes sense in this case
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    deadline: {
        type: Date, 
    },
    collaborators: {type: String} //if it does not work we leave it for later
  }
);
const Task = model("Task", taskSchema);

module.exports = Task;