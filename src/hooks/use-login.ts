import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { LoginResponseDTO } from "../types/DTO/login-response.dto"
import type { MakeLoginDTO } from "../types/DTO/make-login.dto"
import { apiFetch } from "./api-fetch"

export default function useLogin() {
	const { setAccessToken } = useAuth()

	return useMutation({
		mutationFn: async ({ username, password }: MakeLoginDTO) => {
			const { accessToken } = await apiFetch<LoginResponseDTO>("/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: username, password }),
				credentials: "include",
			})

			setAccessToken(accessToken)
		},
	})
}
