const { AuthenticationError } = require('apollo-server-express');
const { User, Skill, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('skills');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('skills');
    },
    skills: async (parent, { skillName }) => {
        const params = skillName ? { skillName } : {};
        return Skill.find(params).sort({skillName: 1});
      },
      skill: async (parent, { skillId }) => {
        return Skill.findOne({ _id: skillId });
      },
      projects: async (parent, { projectName }) => {
        const params = projectName ? { projectName } : {};
        return Project.find(params).sort({projectName: 1});
      },
      project: async (parent, { projectId }) => {
        return Project.findOne({ _id: projectId });
      },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('skills','projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, description, password }) => {
      const user = await User.create({ username, email, description, password });
      const token = signToken(user);
      return { token, user };
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
      removeproject: async (parent, { projectId }, context) => {
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
