import { useEffect, useRef, useState } from "react"
import Footer from "../../../components/footer"
import type { Project } from "../../../types/interfaces/project"
import type { Stack } from "../../../types/interfaces/stack"
import Contact from "./components/contact"
import Header from "./components/header"
import Projects from "./components/projects"
import ResponsiveNavBar from "./components/responsive-nav-bar"
import Stacks from "./components/stacks"
import Whoami from "./components/whoami"

const stacks: Stack[] = [
	{
		id: 1,
		name: "TypeScript",
		iconUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-taCMXs6MhlbJYznaYBla370M0jTXEKcRpXWsjKVK27Vodnr9XiGtNV4SNaHEo8v4OpwP_hxNp5sCodcXnm0GaywE_1zCW4krJUptVQ&s=10",
	},
	{
		id: 2,
		name: "Docker",
		iconUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-taCMXs6MhlbJYznaYBla370M0jTXEKcRpXWsjKVK27Vodnr9XiGtNV4SNaHEo8v4OpwP_hxNp5sCodcXnm0GaywE_1zCW4krJUptVQ&s=10",
	},
	{
		id: 3,
		name: "Linux",
		iconUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-taCMXs6MhlbJYznaYBla370M0jTXEKcRpXWsjKVK27Vodnr9XiGtNV4SNaHEo8v4OpwP_hxNp5sCodcXnm0GaywE_1zCW4krJUptVQ&s=10",
	},
]

const projects: Project[] = [
	{
		id: 1,
		name: "mimo-marmitas",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quae possimus pariatur illum sit porro, fuga, omnis, suscipit magni iste harum eius! Obcaecati eaque ex laboriosam dolore maiores vitae sed.",
		publishedAt: new Date(),
		gitHubUrl: null,
		thumbnailUrl: null,
		stacks,
	},
]

export default function Home() {
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true)
	const lastScrollY = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY <= 8) {
				setIsMobileMenuVisible(true)
			} else {
				setIsMobileMenuVisible(currentScrollY < lastScrollY.current)
			}

			lastScrollY.current = currentScrollY
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="min-h-screen bg-[#101010] text-[#f3f3f3] selection:bg-white selection:text-black">
			<Header />

			<main className="flex flex-col mx-auto max-w-240 px-7 gap-9 md:px-0 md:pb-16 md:pt-10 md:gap-28">
				<Whoami />
				<Stacks stacks={stacks} />
				<Projects projects={projects} />
				<Contact />
			</main>

			<ResponsiveNavBar isMobileMenuVisible={isMobileMenuVisible} />
			<Footer />
		</div>
	)
}
