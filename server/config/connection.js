const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hiphipArray',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
console.log(process.env);

module.exports = mongoose.connection;

