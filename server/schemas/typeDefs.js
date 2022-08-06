const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String 
    email: String
    description: String
    skills: [Skill]!
    projects: [Project]!
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
    organizer: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user: (username: String!): User
    skills(skillName: String): [Skill]
    skill(_id: ID!): Skill
    projects(projectName: String): [Project]
    project(_id: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, description: String!, password: String!): Auth

    updateUser(username: String!, email: String!, description: String!, password: String!): Auth

    login(email: String!, password: String!): Auth
    # addSkill(skillName: String!, description: String!): Skill
    addSkill(skills: [ID]): User 
    removeSkill(_id: ID!): Skill

    updateSkills(
      _id: ID!, 
      skillName: String!, 
      description: String!): Skill

    addProject(projectName: String!, description: String!): Project
    removeProject(_id: ID!): Project
    
    updateProject:(
      _id: ID!, 
      projectName: String!, 
      description: String!): Project
  }
`;

module.exports = typeDefs;
