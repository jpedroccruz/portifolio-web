export default function Footer() {
	return (
		<footer className="flex min-h-11 items-center justify-between border-t border-[#363636] px-7 text-[12px] text-[#777] md:px-[5%]">
			<span className="flex gap-3">
				<a
					href="https://www.linkedin.com/in/jpedroccruz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="w-4" src="/linkedin-vector.svg" alt="LinkedIn" />
				</a>
				<a
					href="https://github.com/jpedroccruz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="w-4" src="/github-vector.svg" alt="LinkedIn" />
				</a>
				<a
					href="mailto:joaopedroccruz.dev@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="w-4" src="/gmail-vector.svg" alt="LinkedIn" />
				</a>
			</span>
			<span>© 2026 jpedrocruz</span>
		</footer>
	)
}
