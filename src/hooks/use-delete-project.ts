import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Project } from "../types/interfaces/project"
import { apiFetch } from "./api-fetch"

export default function useDeleteProject() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (id: number) => {
			await apiFetch(`/projects/${id}`, {
				method: "DELETE",
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			})
			return id
		},
		onSuccess: (deletedId) =>
			queryClient.setQueryData<Project[]>(["project"], (projects = []) =>
				projects.filter((project) => project.id !== deletedId),
			),
	})
}
