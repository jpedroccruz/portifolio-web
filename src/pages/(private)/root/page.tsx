import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../../components/footer"
import useLogout from "../../../hooks/use-logout"
import useProject from "../../../hooks/use-project"
import useStack from "../../../hooks/use-stacks"
import type { Project } from "../../../types/interfaces/project"
import type { Stack } from "../../../types/interfaces/stack"
import Projects from "../../(public)/home/components/projects"
import Stacks from "../../(public)/home/components/stacks"
import ProjectModal from "./components/project-modal"
import StackModal from "./components/stack-modal"

export default function Root() {
	const { data: projects } = useProject()
	const { data: stacks } = useStack()
	const { mutate: logout } = useLogout()
	const navigate = useNavigate()
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
	const [isStackModalOpen, setIsStackModalOpen] = useState(false)
	const [editingStack, setEditingStack] = useState<Stack | null>(null)
	const [editingProject, setEditingProject] = useState<Project | null>(null)

	function handleLogout() {
		logout()
		navigate("/")
	}

	function createProject() {
		setEditingProject(null)
		setIsProjectModalOpen(true)
	}

	function editProject(project: Project) {
		setEditingProject(project)
		setIsProjectModalOpen(true)
	}

	function closeProjectModal() {
		setIsProjectModalOpen(false)
	}

	function createStack() {
		setEditingStack(null)
		setIsStackModalOpen(true)
	}

	function editStack(stack: Stack) {
		setEditingStack(stack)
		setIsStackModalOpen(true)
	}

	function closeStackModal() {
		setIsStackModalOpen(false)
	}

	return (
		<div className="flex min-h-screen flex-col bg-[#101010] text-[#f3f3f3] selection:bg-white selection:text-black">
			<main className="mx-auto w-full flex max-w-240 flex-col gap-12 px-7 py-8 md:gap-20 md:px-0 md:py-12">
				<div className="flex items-center justify-between gap-6">
					<Link
						className="flex w-fit items-center gap-2 text-[18px] text-[#909090] transition-colors hover:text-white"
						to="/"
					>
						<ArrowLeft size={20} />
						<span>return {"<Home/>"}</span>
					</Link>

					<button
						className="cursor-pointer text-[16px] text-[#909090] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7c7c7]"
						onClick={handleLogout}
						type="button"
					>
						&gt; logout_
					</button>
				</div>

				<Stacks
					stacks={stacks ?? null}
					title="# cat stacks"
					showAddButton
					onAddClick={createStack}
					onStackClick={editStack}
				/>
				<Projects
					projects={projects ?? null}
					title="# ls projects"
					showAddButton
					onAddClick={createProject}
					onProjectClick={editProject}
				/>
			</main>

			{isStackModalOpen && (
				<StackModal editingStack={editingStack} onClose={closeStackModal} />
			)}
			{isProjectModalOpen && (
				<ProjectModal
					editingProject={editingProject}
					onClose={closeProjectModal}
				/>
			)}
			<Footer />
		</div>
	)
}
