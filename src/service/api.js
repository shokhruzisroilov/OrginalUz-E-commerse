import axios from 'axios'
import { getItem } from '../heplers/persistanceStorage'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

axios.interceptors.request.use(config => {
	const token = getItem('token')
	const authorization = token ? `Token ${token}` : ''
	config.headers.Authorization = authorization
	return config
})

export default axios
