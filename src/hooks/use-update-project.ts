import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Project } from "../types/interfaces/project"
import { apiFetch } from "./api-fetch"

export type UpdateProjectInput = {
	id: number
	data: Pick<Project, "name" | "description"> & {
		gitHubUrl: string
		thumbnailUrl: string
	}
}

export default function useUpdateProject() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: UpdateProjectInput) =>
			apiFetch<Project>(`/projects/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			}),
		onSuccess: (updatedProject) =>
			queryClient.setQueryData<Project[]>(["project"], (projects = []) =>
				projects.map((project) =>
					project.id === updatedProject.id ? updatedProject : project,
				),
			),
	})
}
