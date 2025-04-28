type NestedRecord = {
	[key: string]: string | string[] | NestedRecord | NestedRecord[]
}

const appendSearchParams = (url: URL, record: NestedRecord): URL => {
	for (let [key, value] of Object.entries(record)) {
		if (typeof value === 'object' && !Array.isArray(value)) {
			value = JSON.stringify(value)
		}

		if (Array.isArray(value)) {
			value = value.join(',')
		}

		url.searchParams.append(key, value)
	}

	return url
}

const get = async <T>(path: string, query: NestedRecord): Promise<{ data: T }> => {
	try {
		const BASE_PATH = process.env.CMS_URL ?? 'http://localhost:8055'
		const targetURL = appendSearchParams(new URL(path, BASE_PATH), query)

		console.log(targetURL.toString())

		const raw = await fetch(targetURL)
		return raw.json()
	} catch (error) {
		return Promise.reject(error)
	}
}

export { get }
