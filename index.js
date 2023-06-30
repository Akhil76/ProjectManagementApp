const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const connectDB = require('./DB_config/db');
const schema = require('./graphql/schemas/schema');


require('dotenv').config();
connectDB();
const app = express();

app.use('/graphql',graphqlHTTP({
    schema :schema,
    graphiql: process.env.NODE_ENV ==='development'
}))

const port = process.env.PORT || 4000;

app.listen(port,console.log(`Server is running on port${port}`));


