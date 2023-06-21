const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV ==='development'
}))

const port = process.env.PORT || 6000;

app.listen(port,console.log(`Server is running on port${port}`));


