const Client = require('../models/clientModel');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNumber,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,

} = require('graphql');

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})


module.exports = ClientType;