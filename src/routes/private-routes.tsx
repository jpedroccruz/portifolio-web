import { Navigate, Outlet } from "react-router-dom"
import useMe from "../hooks/use-me"

export default function PrivateRoutes() {
	const { data: user, isLoading } = useMe()

	if (isLoading) return <>Carregando...</>
	if (!user) return <Navigate to={"/sudo"} />

	return <Outlet />
}
