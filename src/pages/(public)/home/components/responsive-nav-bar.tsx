import { FolderCode, Layers3, Mail, UserRound } from "lucide-react"

type ResponsiveNavBarProps = {
	isMobileMenuVisible: boolean
}

export default function ResponsiveNavBar({
	isMobileMenuVisible,
}: ResponsiveNavBarProps) {
	return (
		<nav
			className={`fixed inset-x-0 bottom-0 z-20 flex h-17 items-center justify-around border-t border-[#363636] bg-[#101010]/95 px-2 backdrop-blur transition-transform duration-300 md:hidden ${isMobileMenuVisible ? "translate-y-0" : "translate-y-full"}`}
		>
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
	)
}
