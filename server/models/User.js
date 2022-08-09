const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');
// const { Project } = require('./Project');
// const { Skill } = require('./Skill');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    description:{
        type: String,
        // required: true,
        trim: true
    },
    skills:[
        {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
        }
    ],
    projects:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
});

userSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(pass) {
    return await bcrypt.compare(pass, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
