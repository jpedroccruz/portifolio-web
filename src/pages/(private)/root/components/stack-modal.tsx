import { type ChangeEvent, type SubmitEvent, useEffect, useState } from "react"
import useCreateStack from "../../../../hooks/use-create-stack"
import useDeleteStack from "../../../../hooks/use-delete-stack"
import useUpdateStack from "../../../../hooks/use-update-stack"
import type { Stack } from "../../../../types/interfaces/stack"
import Modal from "./modal"

type StackModalProps = {
	onClose: () => void
	editingStack: Stack | null
}

const INIT_FORM = {
	name: "",
	iconUrl: "",
}

export default function StackModal({ onClose, editingStack }: StackModalProps) {
	const [formData, setFormData] = useState(INIT_FORM)
	const { mutate: createStack } = useCreateStack()
	const { mutate: updateStack } = useUpdateStack()
	const { mutate: deleteStack } = useDeleteStack()

	useEffect(() => {
		if (editingStack)
			setFormData({
				name: editingStack.name,
				iconUrl: editingStack.iconUrl,
			})

		return
	}, [editingStack])

	function handleFormChange(event: ChangeEvent<HTMLInputElement>) {
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

		if (editingStack) {
			updateStack(
				{ id: editingStack.id, data: formData },
				{ onSuccess: handleSuccess },
			)
			return
		}

		createStack(formData, { onSuccess: handleSuccess })
	}

	return (
		<Modal title={`${editingStack ? "PUT" : "POST"} /stack`} onClose={onClose}>
			<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
				<label className="flex flex-col gap-3 text-lg" htmlFor="stack-name">
					<span>$ name</span>
					<input
						className="border-0 border-b border-[#777] bg-transparent px-0 py-2 outline-none placeholder:text-[#555] focus:border-white"
						id="stack-name"
						name="name"
						placeholder="React"
						required
						value={formData.name}
						onChange={(event) => handleFormChange(event)}
					/>
				</label>
				<label className="flex flex-col gap-3 text-lg" htmlFor="stack-icon-url">
					<span>$ icon_url</span>
					<input
						className="border-0 border-b border-[#777] bg-transparent px-0 py-2 outline-none placeholder:text-[#555] focus:border-white"
						id="stack-icon-url"
						name="iconUrl"
						placeholder="https://..."
						required
						type="url"
						onChange={(event) => handleFormChange(event)}
						value={formData.iconUrl}
					/>
				</label>
				<div className="flex items-center justify-between gap-4 pt-2">
					{editingStack && (
						<button
							className="text-red-400 hover:text-red-300"
							onClick={() =>
								deleteStack(editingStack.id, { onSuccess: handleSuccess })
							}
							type="button"
						>
							&gt; DELETE /stack
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
							&gt; {editingStack ? "PUT /stack" : "POST /stack"}
						</button>
					</div>
				</div>
			</form>
		</Modal>
	)
}
