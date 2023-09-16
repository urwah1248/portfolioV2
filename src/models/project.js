import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        repo: {
            type: String,
            required: true
        },
        prev: {
            type: String,
            required: true
        }
    }
)

const Project = mongoose.model('Project', projectSchema)

export default Project;