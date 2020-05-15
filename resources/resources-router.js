const router = require('express').Router();
const Resources = require('./resources-model.js')

router.post('/', (req, res)=>{
    Resources.addResource(req.body)
    .then(resource=>{
        res.status(201).json({data:{resourceID: resource[0]}})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not create new resource"})
    })
})

router.get('/', (req, res)=>{
    Resources.getResources()
    .then(resources=>{
        res.status(200).json({data: resources})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Could not get resources"})
    })
})

module.exports = router;

