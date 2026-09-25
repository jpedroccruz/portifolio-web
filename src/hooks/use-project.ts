import { useQuery } from "@tanstack/react-query"
import type { Project } from "../types/interfaces/project"
import { apiFetch } from "./api-fetch"

export default function useProject() {
	return useQuery({
		queryKey: ["project"],
		queryFn: async () => apiFetch<Project[]>("/projects"),
		refetchOnWindowFocus: false,
	})
}
