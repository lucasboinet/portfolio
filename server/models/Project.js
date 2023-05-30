import mongoose from "mongoose";

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

export default mongoose.model('Project', ProjectSchema);