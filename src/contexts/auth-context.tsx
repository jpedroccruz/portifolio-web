import { createContext, type ReactNode, useContext, useState } from "react"
import { apiFetch } from "../hooks/api-fetch"
import type { AccessToken } from "../types/interfaces/acess-token"

type AuthContextValue = {
	accessToken: string | null
	setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
	refreshAccessToken: () => Promise<string>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [token, setToken] = useState<string | null>(null)

	async function refreshAccessToken() {
		try {
			const { accessToken } = await apiFetch<AccessToken>("/refresh", {
				method: "POST",
				credentials: "include",
			})

			setToken(accessToken)
			return accessToken
		} catch (e) {
			setToken(null)
			throw e
		}
	}

	return (
		<AuthContext.Provider
			value={{
				accessToken: token,
				setAccessToken: setToken,
				refreshAccessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider")
	}

	return context
}
