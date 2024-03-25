import axios from 'axios'
import { getItem } from '../heplers/persistanceStorage'

axios.defaults.baseURL = 'https://dreams.pythonanywhere.com'

axios.interceptors.request.use(config => {
	const token = getItem('token')
	const authorization = token ? `Token ${token}` : ''
	config.headers.Authorization = authorization
	return config
})

export default axios
