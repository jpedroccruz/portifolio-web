type RequestOptions = RequestInit & {
	accessToken?: string | null
	refreshAccessToken?: () => Promise<string>
	canRefresh?: boolean
}

export async function apiFetch<T>(
	endpoint: string,
	options?: RequestOptions,
): Promise<T> {
	const { accessToken, refreshAccessToken, canRefresh, ...config } =
		options ?? {}

	const headers = new Headers(config?.headers)

	if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`)

	let response: Response

	try {
		response = await fetch(`http://localhost:3333${endpoint}`, {
			...config,
			headers,
		})
	} catch (error) {
		throw new Error("It was not possible to connect to API.", { cause: error })
	}

	const text = await response.text()
	const data = text ? JSON.parse(text) : null

	if (
		response.status === 401 &&
		data.code === "INVALID_ACCESS" &&
		refreshAccessToken &&
		canRefresh
	) {
		const newToken = await refreshAccessToken()
		return apiFetch(endpoint, { accessToken: newToken, refreshAccessToken })
	}

	if (!response.ok) {
		throw new Error(data?.error ?? "The request failed.")
	}

	return data?.data as T
}
