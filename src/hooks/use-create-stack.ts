import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Stack } from "../types/interfaces/stack"
import { apiFetch } from "./api-fetch"

export type CreateStackInput = Pick<Stack, "name" | "iconUrl">

export default function useCreateStack() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (stack: CreateStackInput) =>
			apiFetch<Stack>("/stacks", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(stack),
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			}),
		onSuccess: (createdStack) =>
			queryClient.setQueryData<Stack[]>(["stack"], (stacks = []) => [
				...stacks,
				createdStack,
			]),
	})
}
