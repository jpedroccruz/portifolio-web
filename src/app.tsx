import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sudo from "./pages/(guest)/sudo/page"
import Root from "./pages/(private)/root/page"
import Home from "./pages/(public)/home/page"
import GuestRoutes from "./routes/guest-routes"
import PrivateRoutes from "./routes/private-routes"

const client = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route element={<GuestRoutes />}>
						<Route path="/sudo" element={<Sudo />} />
					</Route>

					<Route element={<PrivateRoutes />}>
						<Route path="/root" element={<Root />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}
