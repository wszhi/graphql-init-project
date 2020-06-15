var express = require('express');
var graphqlHTTP = require('express-graphql');
const fs = require("fs");
const path = require("path");

const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8");

var {buildSchema} = require('graphql');
const schema = buildSchema(typeDefs)
var root = {hello: () => 'Hello world!'};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
