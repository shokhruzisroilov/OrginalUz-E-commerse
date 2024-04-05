import axios from './api'

const ProductService = {
	async getProducts() {
		const response = await axios.get('/products')
		return response.data
	},
	async getProductsDetail(id) {
		const response = await axios.get(`/products/${id}`)
		return response.data
	},
	async createProductOrder() {
		const response = await axios.get('products/order/create')
		return response.data
	},
}

export default ProductService
