import axios from './api'

const ProductService = {
	async getProducts() {
		const response = await axios.get('/products/')
		return response.data
	},
}

export default ProductService
