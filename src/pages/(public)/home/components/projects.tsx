import { ArrowUpRight } from "lucide-react"
import type { Project } from "../../../../types/interfaces/project"

type ProjectsProps = {
	projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
	return (
		<section id="projects">
			<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
				$ ls projects
			</h2>
			{projects.map((project) => {
				return (
					<article
						key={project.id}
						className="min-h-51.25 w-full rounded-xl border border-[#303030] p-4 md:max-w-120"
					>
						<div className="mb-4 flex items-center justify-between text-[21px] font-bold">
							<span>{project.name}</span>
							<ArrowUpRight size={28} className="text-[#777]" />
						</div>
						<p className="mb-4 text-[19px] leading-[1.4] text-[#909090]">
							{project.description}
						</p>
						<div className="flex gap-2.5 text-[12px]">
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
			})}
		</section>
	)
}
