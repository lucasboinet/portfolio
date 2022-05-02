const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    },
    languages: [{
        type: String,
        required: true
    }],
    date: {
        type: String,
        default: new Date().getFullYear()
    }
});

module.exports = Project = mongoose.model('Project', ProjectSchema);