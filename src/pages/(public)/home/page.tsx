import { useEffect, useRef, useState } from "react"
import Footer from "../../../components/footer"
import useStack from "../../../hooks/useStacks"
import Contact from "./components/contact"
import Header from "./components/header"
import Projects from "./components/projects"
import ResponsiveNavBar from "./components/responsive-nav-bar"
import Stacks from "./components/stacks"
import Whoami from "./components/whoami"

export default function Home() {
	const [projects] = useState(null)
	const { data: stacks } = useStack()

	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true)
	const lastScrollY = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY <= 8) setIsMobileMenuVisible(true)
			else setIsMobileMenuVisible(currentScrollY < lastScrollY.current)

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
				<Stacks stacks={stacks ?? null} />
				<Projects projects={projects} />
				<Contact />
			</main>

			<ResponsiveNavBar isMobileMenuVisible={isMobileMenuVisible} />
			<Footer />
		</div>
	)
}
