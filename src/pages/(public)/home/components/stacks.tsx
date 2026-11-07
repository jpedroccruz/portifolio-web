import { CircleX, Plus } from "lucide-react"
import type { Stack } from "../../../../types/interfaces/stack"

type StackProps = {
	stacks: Stack[] | null
	selectedStacks?: Stack[]
	title?: string
	showAddButton?: boolean
	onAddClick?: () => void
	onStackClick?: (stack: Stack) => void
}

export default function Stacks({
	stacks,
	selectedStacks = [],
	showAddButton,
	title,
	onAddClick,
	onStackClick,
}: StackProps) {

	return (
		<section id="stacks">
			<h1 className={`${title ? "flex" : "hidden"} mb-7 flex items-center gap-2 text-[34px] font-bold md:mb-8 md:text-[36px]`}>
				{title}
			</h1>

			<div className="flex flex-wrap items-center justify-between gap-x-2.5 gap-y-3.5 md:justify-center md:gap-x-4 md:gap-y-4">
				{stacks?.length ? (
					stacks.map((stack) => {
						const isSelected = selectedStacks.some(
							(item) => item.id === stack.id,
						)

						const content = (
							<img
								className="w-full rounded-2xl"
								src={stack.iconUrl}
								alt={stack.name}
							/>
						)

						if (onStackClick) {
							console.log()

							return (
								<button
									className={`cursor-pointer rounded-2xl border p-3 text-left transition-colors hover:border-[#777] md:w-24 ${
										isSelected
											? "border-white"
											: "border-[#292929]"
									}`}
									key={stack.id}
									onClick={() => onStackClick(stack)}
									title={stack.name}
									type="button"
								>
									{content}
								</button>
							)
						}

						return (
							<div
								className="rounded-2xl border border-[#292929] p-3 md:w-24"
								key={stack.id}
								title={stack.name}
							>
								{content}
							</div>
						)
					})
				) : (
					<div className="flex items-center gap-3 text-[18px] font-bold">
						<CircleX size={28} className="text-[#777]" />
						<span>No stacks registered.</span>
					</div>
				)}

				{showAddButton && (
					<button
						className="flex h-16 cursor-pointer items-center justify-center justify-self-center self-center rounded-xl bg-[#777] text-[#101010] transition-colors hover:bg-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-20"
						onClick={onAddClick}
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