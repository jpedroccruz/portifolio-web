import { FolderCode, Layers3, Mail, UserRound } from "lucide-react"

export default function Header() {
	return (
		<header className="hidden p-2 border-b border-[#292929] md:block">
			<div className="mx-auto flex h-full w-full max-w-240 items-center justify-between">
				<a className="text-2xl font-bold" href="#whoami">
					JP <span className="text-[#777]">~</span>
				</a>
				<nav className="flex gap-8 text-[15px] text-[#cfcfcf]">
					<a className="flex flex-col items-center gap-0.5" href="#whoami">
						<UserRound size={16} />
						./whoami
					</a>
					<a className="flex flex-col items-center gap-0.5" href="#stack">
						<Layers3 size={16} />
						./stack
					</a>
					<a className="flex flex-col items-center gap-0.5" href="#projects">
						<FolderCode size={16} />
						./projects
					</a>
					<a className="flex flex-col items-center gap-0.5" href="#contact">
						<Mail size={16} />
						./ping-me
					</a>
				</nav>
			</div>
		</header>
	)
}
