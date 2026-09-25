import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { User } from "../types/interfaces/user"
import { apiFetch } from "./api-fetch"

export default function useMe() {
	const { accessToken, refreshAccessToken } = useAuth()

	return useQuery({
		queryKey: ["me"],
		queryFn: async () =>
			apiFetch<User>("/me", {
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			}),
		retry: false,
		refetchOnWindowFocus: false,
	})
}
