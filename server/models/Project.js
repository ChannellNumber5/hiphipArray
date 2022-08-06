const mongoose = require('mongoose');

const { Schema } = mongoose;

// const { Skill } = require('./Skill');
// const { User } = require('./User');

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    skills:[        
        {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
        }],
    teammates:[        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;