import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sudo from "./pages/(guest)/sudo/page"
import Home from "./pages/(public)/home/page"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sudo" element={<Sudo />} />
			</Routes>
		</BrowserRouter>
	)
}
