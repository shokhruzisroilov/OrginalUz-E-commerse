import axios from './api'

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/auth/signup', user)
		return response.data
	},
	async userLogin(user) {
		const response = await axios.post('/auth/login', user)
		return response.data
	},
	async getUser() {
		const response = await axios.post('')
		return response.data
	},
}
export default AuthService
