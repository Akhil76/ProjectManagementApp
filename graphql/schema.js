const Project = require('../models/projectModel');
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
// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addClient:{
            type:ClientType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                phone:{type:GraphQLNonNull(GraphQLString)}
            },
        resolve(parent,args){
                const client = new Client({
                    name:args.name,
                    phone:args.phone
                });
                return client.save();
            },
        },
        // Delete a single client
        deleteClient:{
            type: ClientType,
            args:{
                id:{type:GraphQLNonNull(GraphQLID)}
            },
        resolve(parent,args){
                return Client.findByIdAndRemove(args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})