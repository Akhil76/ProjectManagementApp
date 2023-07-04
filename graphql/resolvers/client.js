const {GraphQLList,GraphQLObjectType} = require('graphql');
const Client = require('../../models/clientModel');
const ClientType = require('../typeDefs/clientType');



module.exports={
    clients:{
        type: new GraphQLList(ClientType),
        resolve(parent,args){
            return Client.find();
        }
    }
}