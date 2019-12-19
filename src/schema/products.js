const typeDefs = `
  # Product Type
  type Product {
    category: Int!
    description: String!
    id: Int!
    logo: String
    name: String!
    quantity: Int!
  }
`;

const query = `
  # Gets Products
    products: [Product]
`;

const resolvers = {
	Query: {
		products(obj, args, { dataSources }) {
			return dataSources.productsApi.getProduct('5c811f3b310000c016771d9b', {['mocky-delay']: '1s'} )
		},
	}
};

module.exports = {
	typeDefs,
	query,
	resolvers
};
