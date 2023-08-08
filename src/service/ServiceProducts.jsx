class ServiceProducts {
	baseUrl = 'http://orginaluz.onrender.com/'
	getData = async api => {
		let res = fetch(`${this.baseUrl}${api}`)
		if (res.ok) {
			throw new Error('Error')
		}
		return (await res).json()
	}

	getUser = url => {
		return this.getData(url)
	}
}

export default new ServiceProducts()
