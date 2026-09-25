import { ArrowUpRight, CircleX, Pencil, Plus } from "lucide-react"
import type { Project } from "../../../../types/interfaces/project"

type ProjectsProps = {
	projects: Project[] | null
	title: string
	showAddButton?: boolean
	onAddClick?: () => void
	onProjectClick?: (project: Project) => void
}

export default function Projects({
	projects,
	showAddButton,
	title,
	onAddClick,
	onProjectClick,
}: ProjectsProps) {
	return (
		<section id="projects">
			<h2 className="mb-7 flex items-center gap-2 text-[34px] font-bold md:mb-8 md:text-[36px]">
				{title}
			</h2>
			<div className="flex flex-wrap justify-between gap-x-2.5 gap-y-3.5 md:justify-center md:gap-x-4 md:gap-y-4">
				{projects?.length ? (
					projects.map((project) => {
						const card = (
							<article
								key={project.id}
								className={`flex min-h-51.25 w-full flex-col rounded-xl border border-[#303030] p-4 transition-colors hover:border-[#777] md:max-w-120 ${onProjectClick || project.gitHubUrl ? "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" : ""}`}
								onClick={
									onProjectClick ? () => onProjectClick(project) : undefined
								}
								onKeyDown={
									onProjectClick
										? (event) => {
												if (event.key === "Enter" || event.key === " ")
													onProjectClick(project)
											}
										: undefined
								}
								role={onProjectClick ? "button" : undefined}
								tabIndex={onProjectClick ? 0 : undefined}
							>
								<div className="mb-4 flex items-center justify-between text-[21px] font-bold">
									<span>{project.name}</span>
									{onProjectClick ? (
										<Pencil size={24} className="text-[#777]" />
									) : (
										<ArrowUpRight size={28} className="text-[#777]" />
									)}
								</div>
								<p className="mb-4 text-[19px] leading-[1.4] text-[#909090]">
									{project.description}
								</p>
								<div className="mt-auto flex gap-2.5 text-[12px]">
									{project.stacks.map((stack) => {
										return (
											<span
												key={stack.id}
												className="rounded-full border border-[#3b3b3b] px-2.5 py-1"
											>
												{stack.name}
											</span>
										)
									})}
								</div>
							</article>
						)

						if (!onProjectClick && project.gitHubUrl) {
							return (
								<a
									className="block w-full md:max-w-120"
									href={project.gitHubUrl}
									key={project.id}
									rel="noopener noreferrer"
									target="_blank"
								>
									{card}
								</a>
							)
						}

						return card
					})
				) : (
					<div className="flex gap-3 items-center text-[18px] font-bold">
						<CircleX size={28} className="text-[#777]" />
						<span>No projects registered.</span>
					</div>
				)}
				{showAddButton && (
					<button
						className="flex h-16 items-center justify-center justify-self-center self-center rounded-xl bg-[#777] text-[#101010] transition-colors hover:bg-[#aaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-20 cursor-pointer"
						onClick={onAddClick}
						type="button"
						aria-label="Add Project"
					>
						<Plus size={32} strokeWidth={2} />
					</button>
				)}
			</div>
		</section>
	)
}
