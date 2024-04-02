import axios from './api'

const BasketsService = {
	async getBaskets() {
		const response = await axios.get('/products/basket')
		return response.data
	},
}

export default BasketsService
