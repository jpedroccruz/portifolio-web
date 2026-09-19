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
					stacks.map(({ id, name, iconUrl }) => (
						<div
							className="rounded-2xl p-3 border border-[#292929] md:w-24"
							key={id}
							title={name}
						>
							<img className="w-full rounded-2xl" src={iconUrl} alt={name} />
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
