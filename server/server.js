const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const { authMiddleware } = require('./utils/auth') still need to create an authentication js file

//const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//creates new apollo server instance using the defined typeDefs and resolvers and authentication middleware, so that client can make queries to database. will unremark when typeDefs resolvers and middleware have been coded
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}