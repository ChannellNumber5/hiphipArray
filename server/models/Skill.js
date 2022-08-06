const mongoose = require('mongoose');

const { Schema } = mongoose;

// const { User } = require('./User');

const skillSchema = new Schema({
    skillName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    users:[ 
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;