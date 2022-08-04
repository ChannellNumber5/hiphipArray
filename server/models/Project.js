const mongoose = require('mongoose');

const { Schema } = mongoose;

const { Skill } = require('./Skill');
const { User } = require('./User');

const projectSchema = new Schema({
    name: {
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
    skills:[Skill.Schema],
    teammates:[User.Schema]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;