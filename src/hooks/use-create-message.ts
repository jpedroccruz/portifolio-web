import { useMutation } from "@tanstack/react-query"
import type { Message } from "../types/interfaces/message"
import { fetchData } from "./fetch-data"

export default function useCreateMessage() {
	return useMutation({
		mutationFn: (message: Message) => {
			return fetchData("http://localhost:3333/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(message),
			})
		},
	})
}
