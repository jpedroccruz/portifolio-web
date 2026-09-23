import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { User } from "../types/interfaces/user"
import { fetchAuthenticated } from "./fetch-authenticated"

export default function useMe() {
	const { accessToken } = useAuth()

	return useQuery({
		queryKey: ["me"],
		enabled: !!accessToken,
		queryFn: async () =>
			fetchAuthenticated<User>("http://localhost:3333/me", accessToken),
		retry: false,
	})
}
