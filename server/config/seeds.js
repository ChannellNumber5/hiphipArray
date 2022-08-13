const db = require('./connection');
const { User, Project, Skill } = require('../models');

db.once('open', async () => {

    await Skill.deleteMany();

    const skills = await Skill.insertMany([
        {
            skillName:'HTML',
            description:'front end structure language'
        },
        {
            skillName:'CSS',
            description:'front end styling language'
        },
        {
            skillName:'JavaScript',
            description:'object oriented programming language'
        },
        {
            skillName:'React',
            description:'Client side web page rendering application that updates UI as user interacts and state changes'
        },
        {
            skillName:'Python',
            description:'Cool coding language for video games'
        },
        {
            skillName:'Node',
            description:'language used to allow your application to run and connect to the server'
        },
        {
            skillName:'SQL',
            description:'database querying language'
        },       
        {
            skillName:'Angular',
            description:'client side rendering application/language for UI'
        },
        {
            skillName:'Swift',
            description:'general-purpose, multi-paradigm, compiled programming language'
        },
        {
            skillName:'GO',
            description:'statically typed, compiled programming language'
        },
        {
            skillName:'MongoDB',
            description:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
        },
        {
            skillName:'Ruby',
            description:'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms'
        },
        {
            skillName:'TypeScript',
            description:'strict syntactical superset of JavaScript and adds optional static typing to the language'
        },
        {
            skillName:'C++',
            description:'C++ is a general-purpose programming language'
        },
        {
            skillName:'Jira',
            description:' Jira is a proprietary issue tracking product that allows bug tracking and agile project management'
        },
        {
            skillName:'PHP',
            description:' PHP is a general-purpose scripting language geared toward web development.'
        },
        {
            skillName:'Java',
            description:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere.'
        },
        {
            skillName:'C#',
            description:'C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines'
        }
    ]);

    console.log('Skills seeded');

    await User.deleteMany();

    const user1 = await User.create({
        username: 'coderOne',
        email: 'one@mail.com',
        password: 'password',
        description: 'I love HTML!',
        skills: [skills[0]._id],
    });

    const user2 = await User.create({
        username: 'coderTwo',
        email: 'Two@mail.com',
        password: 'password',
        description: 'I love CSS!',
        skills: [skills[1]._id],
    });

    const user3 = await User.create({
        username: 'coderThree',
        email: 'Three@mail.com',
        password: 'password',
        description: 'I love javascript!',
        skills: [skills[2]._id]
    });

    const user4 = await User.create({
        username: 'coderFour',
        email: 'Four@mail.com',
        password: 'password',
        description: 'I love databases and backend development!',
        skills: [skills[5]._id, skills[6]._id],
    });

    const user5 = await User.create({
        username: 'coderFive',
        email: 'Five@mail.com',
        password: 'password',
        description: 'I love databases!',
        skills: [skills[5]._id, skills[6]._id],
    });

    console.log('users seeded');

    await Skill.findOneAndUpdate({id: skills[0]._id},{
        users:[user1._id]
    });

    await Skill.findOneAndUpdate({id: skills[1]._id},{
        users:[user2._id]
    });

    await Skill.findOneAndUpdate({id: skills[2]._id},{
        users:[user3._id]
    });

    await Skill.findOneAndUpdate({id: skills[3]._id},{
        users:[user4._id]
    });

    await Skill.findOneAndUpdate({id: skills[5]._id},{
        users:[user4.id, user5._id]
    });

    await Skill.findOneAndUpdate({id: skills[6]._id}, {
        users:[user4.id, user5._id]
    });

    console.log('skills updated');

    await Project.deleteMany();

    const project1 = await Project.create({
        id: 1,
        projectName:'Database project',
        description:'Fully functional database that can be queried',
        teamLead: user5._id,
        neededSkills:[skills[6]._id,skills[5]._id],
        teammates:[user4.id]
    });

    const project2 = await Project.create({
        projectName:'Design for client side of application',
        description:'Fantastic UI/UX for an up and coming app',
        teamLead: user1._id,
        neededSkills:[skills[0]._id,skills[1]._id, skills[3]._id4, skills[7]._id],
        teammates:[user2._id]
    });

    const project3 = await Project.create({
        projectName:'Handcrafted Web Design',
        description:'Needed teammates who love CSS to make hand designed UI/UX',
        teamLead: user2._id,
        neededSkills:[skills[0]._id,skills[1]._id],
        teammates:[user1._id]
    });

    const project4 = await Project.create({
        projectName:'Databases for Days!',
        description:"Collection of databases that meets any developer's needs",
        teamLead: user4._id,
        neededSkills:[skills[2]._id,skills[5]._id,skills[6]._id],
        teammates:[user5._id]
    });

    const project5 = await Project.create({
        projectName:'mySQL database',
        description:'Strict SQL database development',
        teamLead: user4._id,
        neededSkills:[skills[5]._id, skills[6]._id],
        teammates:[]
    });

    console.log("projects seeded");

   await User.findOneAndUpdate({ id: user1._id}, {
        projects: [project2._id]
    });

    await User.findOneAndUpdate({ id: user2._id},{
        projects: [project3._id]
    });

    await User.findOneAndUpdate({ id: user4._id},{
        projects: [project4._id, project5._id]
    });

    await User.findOneAndUpdate({id: user5._id},{
        projects: [project1._id]
    });

    console.log('users updated');

    process.exit();
});