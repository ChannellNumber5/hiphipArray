const db = require('./connection');
const { User, Project, Skill } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.insertMany()

    console.log('users seeded');

    process.exit();
});