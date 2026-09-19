export async function fetchData<T>(
	url: string,
	config?: RequestInit,
): Promise<T> {
	let response: Response

	try {
		response = await fetch(url, config)
	} catch (error) {
		throw new Error("It was not possible to connect to API.", { cause: error })
	}

	const data = await response.json()
	if (!response.ok) throw new Error(data.error)

	return data.data as T
}
