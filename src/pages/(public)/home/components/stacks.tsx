import { CircleX } from "lucide-react"
import type { Stack } from "../../../../types/interfaces/stack"

type StackProps = {
	stacks: Stack[] | null
}

export default function Stacks({ stacks }: StackProps) {
	return (
		<section id="stacks">
			<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
				$ cat stacks
			</h2>
			<div className="flex flex-wrap justify-between gap-x-2.5 gap-y-3.5 md:justify-center md:gap-x-4 md:gap-y-4">
				{stacks ? (
					stacks.map((stack) => (
						<div
							className="flex aspect-square items-center justify-center rounded-2xl border border-[#292929] p-1 transition-colors hover:border-[#555]"
							key={stack.name}
							title={stack.name}
						>
							<img
								className="h-3/5 w-3/5 object-contain"
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
			</div>
		</section>
	)
}
