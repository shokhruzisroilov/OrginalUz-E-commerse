import axios from './api'

const Categoryservice = {
	async getCategory() {
		const response = await axios.get('/products/category')
		return response.data
	},
}
export default Categoryservice
