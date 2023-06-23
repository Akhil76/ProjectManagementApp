const Project = require('../../models/projectModel');
const Client = require('../../models/clientModel');


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNumber,
    GraphQLSchema,
    GraphQLList,

} = require('graphql');

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        clients:{
            type: new GraphQLList(ClientType),
            resolve(parent,args){
                return Client.find();
            }
        },
        client:{
            type: ClientType,
            resolve(parent,args){
                return Client.findById(args.id);
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
})