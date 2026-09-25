import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Stack } from "../types/interfaces/stack"
import { apiFetch } from "./api-fetch"

export type UpdateStackInput = {
	id: number
	data: Pick<Stack, "name" | "iconUrl">
}

export default function useUpdateStack() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: UpdateStackInput) =>
			apiFetch<Stack>(`/stacks/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			}),
		onSuccess: (updatedStack) =>
			queryClient.setQueryData<Stack[]>(["stack"], (stacks = []) =>
				stacks.map((stack) =>
					stack.id === updatedStack.id ? updatedStack : stack,
				),
			),
	})
}
