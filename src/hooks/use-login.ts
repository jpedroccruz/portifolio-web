import { useMutation } from "@tanstack/react-query"
import type { MakeLoginDTO } from "../types/DTO/make-login.dto"
import { fetchData } from "./fetch-data"

export default function useLogin() {
	return useMutation({
		mutationFn: ({ username, password }: MakeLoginDTO) => {
			return fetchData("http://localhost:3333/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			})
		},
	})
}
