class ServiceProducts {
	baseUrl = 'https://jsonplaceholder.typicode.com/'
	getData = async api => {
		let res = fetch(`${this.baseUrl}${api}`)
		if (res.ok) {
			throw new Error('Error')
		}
		return (await res).json()
	}

	getProduct = url => {
		return this.getData(url)
	}
}

export default new ServiceProducts()
