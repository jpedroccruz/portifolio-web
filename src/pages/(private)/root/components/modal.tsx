import type { ReactNode } from "react"
import { useEffect } from "react"

type ModalProps = {
	title: string
	children: ReactNode
	onClose: () => void
}

export default function Modal({ title, children, onClose }: ModalProps) {
	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") onClose()
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => document.removeEventListener("keydown", handleKeyDown)
	}, [onClose])

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center px-6 py-8"
			role="presentation"
		>
			<button
				aria-label="Close modal"
				className="absolute inset-0 cursor-default bg-black/75"
				onClick={onClose}
				type="button"
			/>
			<div
				aria-modal="true"
				className="relative w-full max-w-140 border border-[#363636] bg-[#101010] p-6 text-[#f3f3f3] shadow-2xl md:p-8"
				role="dialog"
			>
				<div className="mb-8 flex items-start justify-between gap-6">
					<h2 className="text-2xl font-bold">{title}</h2>
					<button
						aria-label="Close modal"
						className="text-2xl leading-none text-[#777] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7c7c7]"
						onClick={onClose}
						type="button"
					>
						×
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}
