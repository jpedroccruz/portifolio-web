import { useMutation } from "@tanstack/react-query"
import type { Message } from "../types/interfaces/message"
import { apiFetch } from "./api-fetch"

export default function useCreateMessage() {
	return useMutation({
		mutationFn: (message: Message) =>
			apiFetch("/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(message),
			}),
	})
}
