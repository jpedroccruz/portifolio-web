import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../contexts/auth-context"
import type { Project } from "../types/interfaces/project"
import { apiFetch } from "./api-fetch"

export type CreateProjectInput = Pick<Project, "name" | "description"> & {
	gitHubUrl: string
	thumbnailUrl: string
}

export default function useCreateProject() {
	const { accessToken, refreshAccessToken } = useAuth()
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (project: CreateProjectInput) =>
			apiFetch<Project>("/projects", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(project),
				accessToken,
				refreshAccessToken,
				canRefresh: true,
			}),
		onSuccess: (createdProject) =>
			queryClient.setQueryData<Project[]>(["project"], (projects = []) => [
				...projects,
				createdProject,
			]),
	})
}
