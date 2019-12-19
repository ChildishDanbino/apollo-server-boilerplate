const { RESTDataSource} = require('apollo-datasource-rest');
const querystring = require('query-string');

class ProductsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'http://www.mocky.io/v2/';
	}

	async getProduct(url, params) {
		return await this.get(`${url}?${querystring.stringify(params)}`);
	}
}

module.exports = {
	ProductsAPI
};
