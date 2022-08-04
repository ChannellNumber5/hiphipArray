const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String 
    email: String
    skills: [Skill]!
    Projects: [Project]!
  }

  type Skill {
    _id: ID
    name: String
    description: String
    users: [User]
  }

  type Project {
    _id: ID
    name: String
    description: String
    
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user: (username: String!): User
    Skills(name: String): [Skill]
    skill(skillId: ID!): Skill
    Projects(name: String) : [Project]
    Project(ProjectId: ID!): Project
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
