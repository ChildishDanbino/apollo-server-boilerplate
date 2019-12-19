const { gql } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const products = require('./products');

const rootSchema = gql`
  type Query {
    # Products
    ${products.query}
  }
  
  schema {
    query: Query
  }
`;

const resolvers =[
	products.resolvers
];

const typeDefs = [
	rootSchema,
	products.typeDefs
];


const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

module.exports = {
	schema
};


