const express = require('express')
const mongoose = require('mongoose')

const router  = express.Router()

const Task  = require('../models/Task.model')

/*Routes */

//Post - Create a new task
router.post("/task/:userId", (req, res)=>{ //do we need to add /:userId/task instead of just /task? 
    const userId = req.params.userId
    const {title, description, deadline, attachments, user} = req.body;

    Task.create({title, description, deadline, attachments, user}) //add array of users here when adding friends functionality. 
    .then((response) => res.json(response))
    .catch((error)=> res.json(error))
})

//Get - Reads all tasks for one specific user

router.get('/tasks/:userId', (req, res, next) => {
    const userId = req.params.userId;
  
    Task.find({ user: userId })
      .then((tasks) => {
        res.json(tasks);
      })
      .catch((error) => {
        res.json(error);
      });
  });

//Get - Reads one specific task
router.get("/tasks/:userId/:taskId", (req, res)=>{
    const {taskId} = req.params;
    Task.findById(taskId)
    .then((task)=> res.json(task))
    .catch((error)=>res.json(error))
})

//Put - Updates one specific task
router.put("/tasks/:userId/:taskId", (req, res)=>{
    const {taskId} = req.params;
    const {title, description, deadline, attachments, userId} = req.body;

    Task.findByIdAndUpdate(taskId, {title, description, deadline, attachments, userId}, {new: true})
    .then(()=>{
        res.json({message: "Task Updated!"})
    })
    .catch ((error)=>{
        res.json({message: "Task failed to update!"})
    })
})

//Delete - Deletes one specific task
router.delete("/tasks/:userId/:taskId", (req, res)=>{
    const {taskId} = req.params;
    Task.findByIdAndDelete(taskId)
    .then(()=>{
        res.json({message: "Task deleted"})
    })
    .catch((error)=>{
        res.json({message: "Task could not be deleted"})
    })
})

module.exports = router;