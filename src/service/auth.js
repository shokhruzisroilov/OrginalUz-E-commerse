import axios from './api'

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/auth/signup/', user)
		return response.data
	},
}
export default AuthService
