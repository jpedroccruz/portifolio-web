import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { LoginResponseDTO } from "../types/DTO/login-response.dto"
import type { MakeLoginDTO } from "../types/DTO/make-login.dto"
import { fetchData } from "./fetch-data"

export default function useLogin() {
	const { setAccessToken } = useAuth()

	return useMutation({
		mutationFn: async ({ username, password }: MakeLoginDTO) => {
			const response = await fetchData<LoginResponseDTO>(
				"http://localhost:3333/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: username, password }),
					credentials: "include",
				},
			)

			console.log(response.accessToken)
			setAccessToken(response.accessToken)
			return response.accessToken
		},
	})
}
