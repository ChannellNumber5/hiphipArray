const mongoose = require('mongoose');

const { Schema } = mongoose;

const { User } = require('./User');

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    users:[User.Schema]
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;