const mongoose = require('mongoose');
 
const ProjectSchema = mongoose.Schema({
    projectImage: {
        data: Buffer,
        contentType: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    text: {
        data: String,
        required: true,
    }
});

const ProjectModel = mongoose.model('ProjectModel', ProjectSchema)

module.exports = ProjectModel;
