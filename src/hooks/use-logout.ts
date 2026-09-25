import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { LoginResponseDTO } from "../types/DTO/login-response.dto"
import { apiFetch } from "./api-fetch"

export default function useLogout() {
	const { accessToken, setAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async () => {
			await apiFetch<LoginResponseDTO>("/logout", {
				method: "POST",
				credentials: "include",
				accessToken,
			})

			setAccessToken(null)

			queryClient.removeQueries({
				queryKey: ["me"],
			})
		},
	})
}
