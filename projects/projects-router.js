const router = require('express').Router();
const Projects = require('./projects-model.js')


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