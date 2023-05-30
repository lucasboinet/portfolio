import express from 'express';
import ProjectModel from '../models/Project.js';

const router = express.Router();

router.get('/', (req, res) => {
    ProjectModel.find()
        .then((projects) => res.status(200).json({projects, success: true}))
        .catch((err) => res.status(400).json({success: false}))
})

router.get('/:id', (req, res) => {
    const project_id = req.params.id;

    ProjectModel.findOne({_id: project_id})
        .then((project) => res.status(200).json({project, success: true}))
        .catch((err) => res.status(400).json({success: false}))
})

export default router;