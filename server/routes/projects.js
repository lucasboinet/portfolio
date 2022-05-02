const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', (req, res) => {
    Project.find()
        .then((projects) => res.status(200).json({projects, success: true}))
        .catch((err) => res.status(400).json({success: false}))
})

router.get('/:id', (req, res) => {
    const project_id = req.params.id;

    Project.findOne({_id: project_id})
        .then((project) => res.status(200).json({project, success: true}))
        .catch((err) => res.status(400).json({success: false}))
})

module.exports = router;