const router = require('express').Router();
const Tasks = require('./tasks-model.js')

router.post('/', (req, res)=>{
    Tasks.addTask(req.body)
    .then(id=>{
        res.status(201).json({data:{taskID: id[0]}})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not add task"})
    })
})

router.get('/', (req,res)=>{
    Tasks.getTasks()
    .then(tasks=>{
        res.status(200).json({data: tasks})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not get tasks"})
    })
})

module.exports = router;