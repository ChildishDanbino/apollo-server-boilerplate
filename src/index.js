const { ApolloServer } = require('apollo-server');
const { schema } = require('./schema');
const { ProductsAPI } = require('./data-sources');

const server = new ApolloServer({
	schema,
	dataSources: () => {
		return {
			productsApi: new ProductsAPI(),
		};
	},
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
