import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sudo from "./pages/(guest)/sudo/page"
import Root from "./pages/(private)/root/page"
import Home from "./pages/(public)/home/page"

const client = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sudo" element={<Sudo />} />
					<Route path="/root" element={<Root />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}
