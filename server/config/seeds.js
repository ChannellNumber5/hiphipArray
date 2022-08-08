const db = require('./connection');
const { User, Project, Skill } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        id: 1,
        username: 'coderOne',
        email: 'one@mail.com',
        password: 'password',
        description: 'I love java!',
        skills: [1],
        projects: [2]
    });
    await User.create({
        id: 2,
        username: 'coderTwo',
        email: 'Two@mail.com',
        password: 'password',
        description: 'I love python!',
        skills: [2],
        projects: [3]
    });

    await User.create({
        id: 3,
        username: 'coderThree',
        email: 'Three@mail.com',
        password: 'password',
        description: 'I love C++!',
        skills: [3]
    });

    await User.create({
        id: 4,
        username: 'coderFour',
        email: 'Four@mail.com',
        password: 'password',
        description: 'I love gql and mysql!',
        skills: [4, 5],
        projects: [5, 6]
    });

    await User.create({
        id: 5,
        username: 'coderFive',
        email: 'Five@mail.com',
        password: 'password',
        description: 'I love javascript!',
        skills: [6],
        projects: [1]
    });

    console.log('users seeded');

    await Skill.deleteMany();

    const skills = await Skill.insertMany([
        {
            id: 1,
            skillName:'',
            description:'',
            users:[]
        },
        {
            id: 2,
            skillName:'',
            description:'',
            users:[]
        },
        {
            id: 3,
            skillName:'',
            description:'',
            users:[]
        },
        {
            id: 4,
            skillName:'',
            description:'',
            users:[]
        },
        {
            id: 5,
            skillName:'',
            description:'',
            users:[]
        },
        {
            id: 6,
            skillName:'',
            description:'',
            users:[]
        }
    ]);

    console.log('Skills seeded')

    process.exit();
});