const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    description: String
    skills: [Skill]
    projects: [Project]
  }

  type Skill {
    _id: ID
    skillName: String
    description: String
    users: [User]
  }

  type Project {
    _id: ID
    projectName: String
    description: String
    teamLead: User
    neededSkills: [Skill]
    teammates: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user (_id: ID!): User
    skills: [Skill]
    skill(_id: ID!): [User]
    # skill(_id: ID!): Skill
    projects: [Project]
    project(_id: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(
      username: String
      email: String
      password: String
      description: String
      skills: [ID]
      projects: [ID]
    ): Auth

    login(email: String!, password: String!): Auth

    addSkill(skillName: String!, description: String!): Skill
    removeSkill(skillId: ID!): Skill
    updateSkills(_id: ID!, skillName: String!, description: String!): Skill
    addUserSkill(skillId: ID!): User
    removeUserSkill(skillId: ID!): User

    addProject(
      projectName: String!
      description: String!
      teamLead: ID!
    ): Project

    removeProject(projectId: ID!): Project
    
    updateProject(
      _id: ID,
      projectName: String,
      description: String,
      teamLead: ID,
      neededSkills: [ID],
      teammates: [ID]
    ): Project

    addNeededSkill(
      projectId: ID
      skillId: ID!
    ): Project

    removeNeededSkill(
      projectId: ID
      skillId: ID!
      ): Project
  }
`;

module.exports = typeDefs;
