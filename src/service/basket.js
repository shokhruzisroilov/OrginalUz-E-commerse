import axios from './api'

const BasketsService = {
	async getBaskets() {
		const response = await axios.get('/products/basket')
		return response.data
	},
	async addProductBasket(slug) {
		const response = await axios.get(`/products/basket/${slug}/create`)
		return response.data
	},
	async deleteBasket(slug) {
		const response = await axios.get(`/products/basket/${slug}/delete`)
		return response.data
	},
}

export default BasketsService
