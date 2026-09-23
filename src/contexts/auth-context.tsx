import { createContext, type ReactNode, useContext, useState } from "react"

type AuthContextValue = {
	accessToken: string | null
	setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [token, setToken] = useState<string | null>(null)

	return (
		<AuthContext.Provider
			value={{ accessToken: token, setAccessToken: setToken }}
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
