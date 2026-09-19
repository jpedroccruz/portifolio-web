import { useQuery } from "@tanstack/react-query"
import type { Stack } from "../types/interfaces/stack"
import { fetchData } from "./fetch-data"

export default function useStack() {
	return useQuery({
		queryKey: ["stack"],
		queryFn: async () => {
			return fetchData<Stack[]>("http://localhost:3333/stacks")
		},
	})
}
