const router = require('express').Router();
const Projects = require('./projects-model.js')

router.post('/resources', (req, res)=>{
    Projects.addResource(req.body)
    .then(resource=>{
        res.status(201).json({data:{resourceID: resource[0]}})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not create new resource"})
    })
})

router.get('/resources', (req, res)=>{
    Projects.getResources()
    .then(resources=>{
        res.status(200).json({data: resources})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not get resources"})
    })
})

router.post('/', (req, res)=>{
    Projects.addProject(req.body)
    .then(id=>{
        res.status(201).json({data:{projectID: id[0]}})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not add project"})
    })
})

router.get('/', (req,res)=>{
    Projects.getProjects()
    .then(projects=>{
        res.status(200).json({data: projects})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could get projects"})
    })
})


router.post('/tasks', (req, res)=>{
    Projects.addTask(req.body)
    .then(id=>{
        res.status(201).json({data:{taskID: id[0]}})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not add task"})
    })
})

router.get('/tasks', (req,res)=>{
    Projects.getTasks()
    .then(tasks=>{
        res.status(200).json({data: tasks})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not get tasks"})
    })
})

router.get('/:id', (req, res)=>{
    Projects.getProjectByID(req.params.id)
    .then(project=>{
        res.status(200).json({data: project})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not get projects"})
    })
})

module.exports = router;