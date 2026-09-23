import { fetchData } from "./fetch-data"

export async function fetchAuthenticated<T>(
	url: string,
	accessToken: string | null,
	config?: RequestInit,
): Promise<T> {
	const headers = new Headers(config?.headers)

	if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`)

	return fetchData<T>(url, {
		...config,
		headers,
	})
}
