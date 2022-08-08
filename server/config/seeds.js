const db = require('./connection');
const { User, Project, Skill } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        id: 1,
        username: 'coderOne',
        email: 'one@mail.com',
        password: 'password',
        description: 'I love HTML!',
        skills: [1],
        projects: [2]
    });
    await User.create({
        id: 2,
        username: 'coderTwo',
        email: 'Two@mail.com',
        password: 'password',
        description: 'I love CSS!',
        skills: [2],
        projects: [3]
    });

    await User.create({
        id: 3,
        username: 'coderThree',
        email: 'Three@mail.com',
        password: 'password',
        description: 'I love javascript!',
        skills: [3]
    });

    await User.create({
        id: 4,
        username: 'coderFour',
        email: 'Four@mail.com',
        password: 'password',
        description: 'I love databases and backend development!',
        skills: [6,7],
        projects: [4,5]
    });

    await User.create({
        id: 5,
        username: 'coderFive',
        email: 'Five@mail.com',
        password: 'password',
        description: 'I love databases!',
        skills: [6,7],
        projects: [1]
    });

    console.log('users seeded');

    await Skill.deleteMany();

    const skills = await Skill.insertMany([
        {
            id: 1,
            skillName:'HTML',
            description:'front end structure languate',
            users:[1]
        },
        {
            id: 2,
            skillName:'CSS',
            description:'front end styling language',
            users:[2]
        },
        {
            id: 3,
            skillName:'JavaScript',
            description:'object oriented programming language',
            users:[3]
        },
        {
            id: 4,
            skillName:'React',
            description:'Client side web page rendering application that updates UI as user interacts and state changes',
            users:[4]
        },
        {
            id: 5,
            skillName:'Python',
            description:'Cool coding language for video games',
            users:[]
        },
        {
            id: 6,
            skillName:'Node',
            description:'language used to allow your application to run and connect to the server',
            users:[4,5]
        },
        {
            id: 7,
            skillName:'SQL',
            description:'database querying language',
            users:[4,5]
        },        {
            id: 8,
            skillName:'Angular',
            description:'client side rendering application/language for UI',
            users:[]
        }
    ]);

    console.log('Skills seeded');

    await Project.deleteMany();

    await Project.create({
        id: 1,
        projectName:'Database project',
        description:'Fully functional database that can be queried',
        teamLead: 5,
        neededSkills:[7,6],
        teammates:[4]
    });

    await Project.create({
        id: 2,
        projectName:'Design for client side of application',
        description:'Fantastic UI/UX for an up and coming app',
        teamLead: 1,
        neededSkills:[1,2,4,8],
        teammates:[2]
    });

    await Project.create({
        id: 3,
        projectName:'Handcrafted Web Design',
        description:'Needed teammates who love CSS to make hand designed UI/UX',
        teamLead: 2,
        neededSkills:[1,2],
        teammates:[1]
    });

    await Project.create({
        id: 4,
        projectName:'Databases for Days!',
        description:"Collection of databases that meets any developer's needs",
        teamLead: 4,
        neededSkills:[3,6,7],
        teammates:[5]
    });

    await Project.create({
        id: 5,
        projectName:'mySQL database',
        description:'Strict SQL database development',
        teamLead: 4,
        neededSkills:[6,7],
        teammates:[]
    });

    console.log("projects seeded");
    
    process.exit();
});