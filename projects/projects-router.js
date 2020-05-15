const router = require('express').Router();
const Projects = require('./projects-model.js')

router.get('/', (req, res)=>{
    res.status(200).json({message: "HELLO"})
})

module.exports = router;