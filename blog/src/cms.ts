type NestedRecord = {
	[key: string]: string | string[] | NestedRecord | NestedRecord[]
}

const BASE_URL = process.env.CMS_URL ?? 'http://localhost:8055'

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
		const targetURL = appendSearchParams(new URL(path, BASE_URL), query)
		const raw = await fetch(targetURL)
		return raw.json()
	} catch (error) {
		console.error(error)
		return Promise.reject(error)
	}
}

const asset = (uri?: null | string): URL => {
	if (!uri) {
		return new URL('https://placehold.co/100')
	}

	if (/^https?:\/\//i.test(uri)) {
		return new URL(uri)
	}

	return new URL('/assets/' + uri, BASE_URL)
}

export { get, asset }
