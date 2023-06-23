const express = require('express');
const cors = require('cors');
const http = require('http');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const app=express();

connectDB();
app.use(cors());

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:process.env.NODE_ENV==='development'
}));

const server = http.createServer(app);
server.listen(SERVER_PORT,()=>(
  console.log( `Server running on http://localhost:${SERVER_PORT}/`)
));