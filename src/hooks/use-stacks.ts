import { useQuery } from "@tanstack/react-query"
import type { Stack } from "../types/interfaces/stack"
import { apiFetch } from "./api-fetch"

export default function useStack() {
	return useQuery({
		queryKey: ["stack"],
		queryFn: async () => apiFetch<Stack[]>("/stacks"),
		refetchOnWindowFocus: false,
	})
}
