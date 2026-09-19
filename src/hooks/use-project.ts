import { useQuery } from "@tanstack/react-query"
import type { Project } from "../types/interfaces/project"
import { fetchData } from "./fetch-data"

export default function useProject() {
	return useQuery({
		queryKey: ["project"],
		queryFn: async () => {
			return fetchData<Project[]>("http://localhost:3333/projects")
		},
	})
}
