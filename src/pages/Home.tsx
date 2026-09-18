import {
	ArrowUpRight,
	ChevronRight,
	Container,
	Database,
	FolderCode,
	GitBranch,
	Layers3,
	Mail,
	Menu,
	Monitor,
	Send,
	UserRound,
} from "lucide-react"
import { type MouseEvent, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const stack = [
	{ name: "TypeScript", mark: "TS", color: "bg-[#3178c6]" },
	{ name: "Fastify", mark: "fastify", color: "bg-white text-black" },
	{ name: "Docker", icon: Container, color: "bg-[#1597d1]" },
	{ name: "Tailwind", mark: "~", color: "bg-[#111] text-[#38bdf8]" },
	{ name: "PostgreSQL", icon: Database, color: "bg-[#336791]" },
	{ name: "React", mark: "atom", color: "bg-[#111] text-[#22d3ee]" },
	{ name: "Linux", mark: "🐧", color: "bg-[#111]" },
	{ name: "Git", icon: GitBranch, color: "bg-[#f05032]" },
	{ name: "GitHub", icon: "", color: "bg-white text-black" },
	{ name: "Astro", mark: "A", color: "bg-[#111] text-white" },
]

const socials = [
	{
		name: "GitHub",
		detail: "github.com/jpedrocruz",
		href: "https://github.com/jpedrocruz",
		image: "/github.png",
	},
	{
		name: "LinkedIn",
		detail: "linkedin.com/in/jpedrocruz",
		href: "https://linkedin.com/in/jpedrocruz",
		image: "/linkedin.png",
	},
]

export default function Home() {
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true)
	const lastScrollY = useRef(0)
	const handleNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		const targetId = event.currentTarget.getAttribute("href")?.slice(1)
		if (!targetId) return
		document.getElementById(targetId)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}

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
		<div className="min-h-screen bg-[#101010] font-['Cascadia_Mono',monospace] text-[#f3f3f3] selection:bg-white selection:text-black">
			<header className="hidden p-2 border-b border-[#292929] md:block">
				<div className="mx-auto flex h-full w-full max-w-[680px] items-center justify-between">
					<Link
						className="text-2xl font-bold"
						to="#whoami"
						onClick={handleNavClick}
					>
						JP <span className="text-[#777]">~</span>
					</Link>
					<nav className="flex gap-8 text-[15px] text-[#cfcfcf]">
						<Link
							className="flex flex-col items-center gap-0.5"
							to="#whoami"
							onClick={handleNavClick}
						>
							<UserRound size={16} />
							./whoami
						</Link>
						<Link
							className="flex flex-col items-center gap-0.5"
							to="#stack"
							onClick={handleNavClick}
						>
							<Layers3 size={16} />
							./stack
						</Link>
						<Link
							className="flex flex-col items-center gap-0.5"
							to="#projects"
							onClick={handleNavClick}
						>
							<FolderCode size={16} />
							./projects
						</Link>
						<Link
							className="flex flex-col items-center gap-0.5"
							to="#contact"
							onClick={handleNavClick}
						>
							<Mail size={16} />
							./ping-me
						</Link>
					</nav>
				</div>
			</header>

			<main className="mx-auto max-w-[680px] px-7 pb-28 pt-8 md:px-0 md:pb-16 md:pt-10">
				<section id="whoami" className="mb-12 scroll-mt-8 md:mb-20">
					<h1 className="mb-7 flex items-center gap-2 text-[34px] font-bold md:mb-8 md:text-[36px]">
						$ whoami
					</h1>
					<div className="flex flex-col items-stretch gap-6 md:grid md:grid-cols-[270px_1fr] md:items-center md:gap-14">
						<img
							className="mx-auto aspect-square w-[166px] rounded-full object-cover md:mx-0 md:w-[270px]"
							src="/me.png"
							alt="Joao Pedro Cruz"
						/>
						<div>
							<h2 className="mb-1 text-[32px] font-medium md:text-[34px]">
								Joao Pedro Cruz
							</h2>
							<h3 className="mb-5 text-[24px] font-bold md:mb-8 md:text-[24px]">
								&gt; Software Developer_
							</h3>
							<p className="mb-4 text-[20px] leading-[1.4] text-[#909090] md:mb-8 md:text-[20px]">
								I build web applications and backend systems focused on
								performance, maintainability and user experience.
							</p>
							<div className="rounded-xl border border-[#454545] p-4 text-[20px] md:text-[20px]">
								<strong className="text-[22px]">&gt; Currently</strong>
								<p className="mt-2 leading-[1.25] text-[#909090]">
									-&gt; Building Mimo Marmitas
									<br />
									-&gt; Learning Software Architecture
									<br />
									-&gt; Exploring TypeScript ecosystem
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="stack" className="mb-12 scroll-mt-8 md:mb-20">
					<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
						$ cat stack
					</h2>
					<div className="flex flex-wrap justify-between gap-x-2.5 gap-y-3.5 md:justify-center md:gap-x-4 md:gap-y-4">
						{stack.map(({ name, mark, icon: Icon, color }) => (
							<div
								className="grid h-[73px] w-[calc((100%-20px)/3)] place-items-center rounded-xl border border-[#292929] md:w-20"
								key={name}
								title={name}
							>
								{Icon ? (
									<Icon
										size={48}
										strokeWidth={1.5}
										className={
											color.includes("text")
												? color
												: `${color} rounded-full p-2 text-white`
										}
									/>
								) : (
									<span
										className={`grid h-[53px] min-w-[53px] place-items-center rounded-xl px-1 text-center text-2xl font-bold ${color}`}
									>
										{mark}
									</span>
								)}
							</div>
						))}
					</div>
				</section>

				<section id="projects" className="mb-12 scroll-mt-8 md:mb-20">
					<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
						$ ls projects
					</h2>
					<article className="min-h-[205px] w-full rounded-xl border border-[#303030] p-4 md:w-[304px]">
						<div className="mb-4 flex justify-between text-[21px] font-bold">
							<span>mimo-marmitas</span>
							<ArrowUpRight size={18} className="text-[#777]" />
						</div>
						<p className="mb-4 text-[19px] leading-[1.4] text-[#909090]">
							Application created to digitize and streamline a meal-delivery
							business&apos;s sales process, reducing manual tasks and
							centralizing order management within a single platform.
						</p>
						<div className="flex gap-2.5 text-[12px]">
							<span className="rounded-full border border-[#3b3b3b] px-2.5 py-1">
								typescript
							</span>
							<span className="rounded-full border border-[#3b3b3b] px-2.5 py-1">
								fastify
							</span>
						</div>
					</article>
				</section>

				<section id="contact" className="scroll-mt-8">
					<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
						$ ping joaopedro
					</h2>
					<h3 className="mb-4 text-[24px] font-bold">&gt; Let&apos;s talk?</h3>
					<p className="mb-6 text-[20px] leading-[1.4] text-[#909090] md:text-[20px]">
						I&apos;m open to new opportunities, projects, and ideas. If
						you&apos;d like to discuss them, just give me a call!
					</p>
					<h3 className="mb-4 text-[24px] font-bold">&gt; Find me here</h3>
					<div className="mb-6 grid gap-2 md:grid-cols-2 md:gap-4">
						{socials.map((social) => (
							<a
								className="flex min-h-[67px] items-center gap-3 rounded-xl border border-[#303030] p-2.5 transition-colors hover:border-[#666]"
								href={social.href}
								key={social.name}
							>
								<img
									className="h-9 w-9 rounded-full"
									src={social.image}
									alt=""
								/>
								<span>
									<strong className="block text-[20px]">{social.name}</strong>
									<small className="mt-1 block text-[16px] text-[#858585]">
										{social.detail}
									</small>
								</span>
								<ChevronRight size={20} className="ml-auto text-[#666]" />
							</a>
						))}
					</div>
					<h3 className="mb-3 text-[24px] font-bold">
						&gt; Or send me a message
					</h3>
					<form
						className="flex flex-col gap-2.5"
						onSubmit={(event) => event.preventDefault()}
					>
						<label className="text-[20px] font-bold">
							Name
							<input
								className="mt-1 block w-full rounded-lg border border-[#333] bg-transparent p-3 font-['Cascadia_Mono',monospace] text-[18px] text-white outline-none focus:border-[#777]"
								type="text"
								placeholder="Your name"
							/>
						</label>
						<label className="text-[20px] font-bold">
							Email
							<input
								className="mt-1 block w-full rounded-lg border border-[#333] bg-transparent p-3 font-['Cascadia_Mono',monospace] text-[18px] text-white outline-none focus:border-[#777]"
								type="email"
								placeholder="your@email.com"
							/>
						</label>
						<label className="text-[20px] font-bold">
							Message
							<textarea
								className="mt-1 block w-full resize-y rounded-lg border border-[#333] bg-transparent p-3 font-['Cascadia_Mono',monospace] text-[18px] text-white outline-none focus:border-[#777]"
								placeholder="Write your message..."
								rows={3}
							/>
						</label>
						<button
							className="mt-0 flex items-center justify-center gap-1 rounded-md bg-[#c7c7c7] p-3 font-['Cascadia_Mono',monospace] text-lg font-bold text-[#111] transition-colors hover:bg-white"
							type="submit"
						>
							<Send size={13} />
							send message_
						</button>
					</form>
				</section>
			</main>

			<nav
				className={`fixed inset-x-0 bottom-0 z-20 flex h-[68px] items-center justify-around border-t border-[#363636] bg-[#101010]/95 px-2 backdrop-blur transition-transform duration-300 md:hidden ${isMobileMenuVisible ? "translate-y-0" : "translate-y-full"}`}
			>
				<Link
					className="flex flex-col items-center gap-1 text-[16px] text-[#d5d5d5]"
					to="#whoami"
					onClick={handleNavClick}
				>
					<UserRound size={21} />
					./whoami
				</Link>
				<Link
					className="flex flex-col items-center gap-1 text-[16px] text-[#d5d5d5]"
					to="#stack"
					onClick={handleNavClick}
				>
					<Layers3 size={21} />
					./stack
				</Link>
				<Link
					className="flex flex-col items-center gap-1 text-[16px] text-[#d5d5d5]"
					to="#projects"
					onClick={handleNavClick}
				>
					<Monitor size={21} />
					./projects
				</Link>
				<Link
					className="flex flex-col items-center gap-1 text-[16px] text-[#d5d5d5]"
					to="#contact"
					onClick={handleNavClick}
				>
					<Menu size={21} />
					./ping-me
				</Link>
			</nav>

			<footer className="flex min-h-11 items-center justify-between border-t border-[#363636] px-7 text-[12px] text-[#777] md:px-[5%]">
				<span>▣ ◉ ✉</span>
				<span>© 2026 jpedrocruz</span>
			</footer>
		</div>
	)
}
