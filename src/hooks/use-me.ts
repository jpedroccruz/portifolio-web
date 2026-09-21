import { useQuery } from "@tanstack/react-query"
import type { User } from "../types/interfaces/user"
import { fetchData } from "./fetch-data"

export default function useMe() {
	return useQuery({
		queryKey: ["me"],
		queryFn: async () => {
			return fetchData<User>("http://localhost:3333/me", {
				credentials: "include",
			})
		},
		retry: false,
	})
}
