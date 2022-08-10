const { AuthenticationError } = require('apollo-server-express');
const { User, Skill, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // User: {
  //   username: (parent, {username}) => {
  //     return username;
  //   },
  //   email: (parent, {email}) => {
  //     return email;
  //   },
  //   description: (parent, {description}) => {
  //     return description;
  //   },
  //   skills: (parent, {skills}) => {
  //     return skills;
  //   },
  //   projects: (parent, {projects}) => {
  //     return projects;
  //   },
  // },
  // Skill: {
  //   skillName: (parent, {skillName}) =>{
  //     return skillName;
  //   },
  //   description: (parent, {description}) => {
  //     return description;
  //   }
  // },
  // Project: {
  //   projectName: (parent, {projectName}) => {
  //     return projectName;
  //   },
  //   description: (parent, {description}) => {
  //     return description;
  //   },
  //   teamLead: (parent, {teamLead}) => {
  //     return teamLead;
  //   },
  //   neededSkills: (parent, {neededSkills}) => {
  //     return neededSkills;
  //   },
  //   teammates: (parent, {teammates}) => {
  //     return teammates;
  //   }
  // },
  Query: {
    users: async () => {
      return await User.find().populate('skills');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('skills');
    },
    skills: async (parent, { skillName }) => {
      const params = skillName ? { skillName } : {};
      return await Skill.find(params).sort({ skillName: 1 });
    },
    skill: async (parent, { skillId }) => {
      return await Skill.findOne({ _id: skillId });
    },
    projects: async (parent, { projectName }) => {
      const params = projectName ? { projectName } : {};
      return await Project.find(params).sort({ projectName: 1 });
    },
    project: async (parent, { projectId }) => {
      return await Project.findOne({ _id: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate('skills').populate('projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("addUser")
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSkill: async (parent, { skillName, description }, context) => {
      if (context.user) {
        const skill = await Skill.create({
          skillName,
          description
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { skills: skill._id } }
        );

        return skill;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeSkill: async (parent, { skillId }, context) => {
      if (context.user) {
        const skill = await Skill.findOneAndDelete({
          _id: skillId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill._id } }
        );

        return skill;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addProject: async (parent, { projectName, description }, context) => {
      if (context.user) {
        const project = await Project.create({
          projectName,
          description
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
