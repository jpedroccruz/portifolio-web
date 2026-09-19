import { CircleX, Plus } from "lucide-react"
import type { Stack } from "../../../../types/interfaces/stack"

type StackProps = {
	stacks: Stack[] | null
	showAddButton?: boolean
}

export default function Stacks({ stacks, showAddButton }: StackProps) {
	return (
		<section>
			<h1 className="mb-7 flex items-center gap-2 text-[34px] font-bold md:mb-8 md:text-[36px]">
				# cat stacks
			</h1>
			<div className="flex items-centerflex flex-wrap justify-between gap-x-2.5 gap-y-3.5 md:justify-center md:gap-x-4 md:gap-y-4">
				{stacks ? (
					stacks.map((stack) => (
						<div
							className="rounded-2xl p-3 border border-[#292929] md:w-24"
							key={stack.id}
							title={stack.name}
						>
							<img
								className="w-full rounded-2xl"
								src={stack.iconUrl}
								alt={stack.name}
							/>
						</div>
					))
				) : (
					<div className="flex gap-3 items-center text-[18px] font-bold">
						<CircleX size={28} className="text-[#777]" />
						<span>No stacks registered.</span>
					</div>
				)}
				{showAddButton && (
					<button
						className="flex h-16 items-center justify-center justify-self-center self-center rounded-xl bg-[#777] text-[#101010] transition-colors hover:bg-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-20 cursor-pointer"
						type="button"
						aria-label="Add stack"
					>
						<Plus size={32} strokeWidth={2} />
					</button>
				)}
			</div>
		</section>
	)
}
