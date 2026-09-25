import { type ChangeEvent, type SubmitEvent, useEffect, useState } from "react"
import useCreateProject from "../../../../hooks/use-create-project"
import useDeleteProject from "../../../../hooks/use-delete-project"
import useUpdateProject from "../../../../hooks/use-update-project"
import type { Project } from "../../../../types/interfaces/project"
import Modal from "./modal"

type ProjectModalProps = {
	onClose: () => void
	editingProject: Project | null
}

const INIT_FORM = {
	name: "",
	description: "",
	gitHubUrl: "",
	thumbnailUrl: "",
}

export default function ProjectModal({
	onClose,
	editingProject,
}: ProjectModalProps) {
	const [formData, setFormData] = useState(INIT_FORM)
	const { mutate: createProject } = useCreateProject()
	const { mutate: updateProject } = useUpdateProject()
	const { mutate: deleteProject } = useDeleteProject()

	useEffect(() => {
		if (editingProject)
			setFormData({
				name: editingProject.name,
				description: editingProject.description,
				gitHubUrl: editingProject.gitHubUrl ?? "",
				thumbnailUrl: editingProject.thumbnailUrl ?? "",
			})

		return
	}, [editingProject])

	function handleFormChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		event.preventDefault()

		const { name, value } = event.target

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	function handleSuccess() {
		setFormData(INIT_FORM)
		onClose()
	}

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault()

		if (editingProject) {
			updateProject(
				{ id: editingProject.id, data: formData },
				{ onSuccess: handleSuccess },
			)
			return
		}

		createProject(formData, { onSuccess: handleSuccess })
	}

	return (
		<Modal
			title={`${editingProject ? "PUT" : "POST"} /project`}
			onClose={onClose}
		>
			<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
				<label className="flex flex-col gap-2 text-lg" htmlFor="project-name">
					<span>$ name</span>
					<input
						className="border-0 border-b border-[#777] bg-transparent px-0 py-2 outline-none placeholder:text-[#555] focus:border-white"
						id="project-name"
						name="name"
						placeholder="Portfolio"
						required
						value={formData.name}
						onChange={(event) => handleFormChange(event)}
					/>
				</label>
				<label
					className="flex flex-col gap-2 text-lg"
					htmlFor="project-description"
				>
					<span>$ description</span>
					<textarea
						className="min-h-20 resize-y border border-[#777] bg-transparent p-2 outline-none placeholder:text-[#555] focus:border-white"
						id="project-description"
						name="description"
						required
						value={formData.description}
						onChange={(event) => handleFormChange(event)}
					/>
				</label>
				<label
					className="flex flex-col gap-2 text-lg"
					htmlFor="project-github-url"
				>
					<span>$ github_url</span>
					<input
						className="border-0 border-b border-[#777] bg-transparent px-0 py-2 outline-none placeholder:text-[#555] focus:border-white"
						id="project-github-url"
						name="gitHubUrl"
						placeholder="https://github.com/..."
						required
						type="url"
						value={formData.gitHubUrl}
						onChange={(event) => handleFormChange(event)}
					/>
				</label>
				<label
					className="flex flex-col gap-2 text-lg"
					htmlFor="project-thumbnail-url"
				>
					<span>$ thumbnail_url</span>
					<input
						className="border-0 border-b border-[#777] bg-transparent px-0 py-2 outline-none placeholder:text-[#555] focus:border-white"
						id="project-thumbnail-url"
						name="thumbnailUrl"
						placeholder="https://..."
						required
						type="url"
						value={formData.thumbnailUrl}
						onChange={(event) => handleFormChange(event)}
					/>
				</label>
				<div className="flex items-center justify-between gap-4 pt-2">
					{editingProject && (
						<button
							className="text-red-400 hover:text-red-300"
							onClick={() =>
								deleteProject(editingProject.id, { onSuccess: handleSuccess })
							}
							type="button"
						>
							&gt; DELETE /project
						</button>
					)}
					<div className="flex gap-4">
						<button
							className="text-[#909090] hover:text-white"
							onClick={onClose}
							type="button"
						>
							&gt; cancel_
						</button>
						<button
							className="bg-[#c7c7c7] px-4 py-2 font-bold text-black hover:bg-white"
							type="submit"
						>
							&gt; {editingProject ? "PUT /project" : "POST /project"}
						</button>
					</div>
				</div>
			</form>
		</Modal>
	)
}
