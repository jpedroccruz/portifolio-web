import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Stack } from "../types/interfaces/stack"
import { apiFetch } from "./api-fetch"

export default function useDeleteStack() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (id: number) => {
			await apiFetch(`/stacks/${id}`, {
				method: "DELETE",
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			})
			return id
		},
		onSuccess: (deletedId) =>
			queryClient.setQueryData<Stack[]>(["stack"], (stacks = []) =>
				stacks.filter((stack) => stack.id !== deletedId),
			),
	})
}
