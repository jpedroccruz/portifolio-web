import { ChevronRight, Send } from "lucide-react"
import { useState } from "react"
import useCreateMessage from "../../../../hooks/use-create-message"
import type { Message } from "../../../../types/interfaces/message"

export default function Contact() {
	const [message, setMessage] = useState<Message>({
		name: "",
		email: "",
		message: "",
	})
	const [isSent, setIsSent] = useState(false)
	const { mutate, isPending } = useCreateMessage()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsSent(false)
		mutate(message, {
			onSuccess: () => {
				setMessage({ name: "", email: "", message: "" })
				setIsSent(true)
			},
		})
	}

	return (
		<section id="contact">
			<h2 className="mb-6 flex items-center gap-2 text-[34px] font-bold md:mb-7 md:text-[36px]">
				$ ping joaopedro
			</h2>
			<h3 className="mb-4 text-[24px] font-bold">{">"} Let&apos;s talk?</h3>
			<p className="mb-6 text-[20px] leading-[1.4] text-[#909090] md:text-[20px]">
				I&apos;m open to new opportunities, projects, and ideas. If you&apos;d
				like to discuss them, just give me a call!
			</p>
			<h3 className="mb-4 text-[24px] font-bold">{">"} Find me here</h3>
			<div className="mb-6 grid gap-2 md:grid-cols-2 md:gap-4">
				<a
					className="flex min-h-16.75 items-center gap-3 rounded-xl border border-[#303030] p-2.5 transition-colors hover:border-[#666]"
					href="https://github.com/jpedroccruz"
				>
					<img className="h-9 w-9 rounded-full" src="/github.png" alt="" />
					<span>
						<strong className="block text-[20px]">GitHub</strong>
						<small className="mt-1 block text-[16px] text-[#858585]">
							github.com/jpedroccruz
						</small>
					</span>
					<ChevronRight size={20} className="ml-auto text-[#666]" />
				</a>
				<a
					className="flex min-h-16.75 items-center gap-3 rounded-xl border border-[#303030] p-2.5 transition-colors hover:border-[#666]"
					href="https://www.linkedin.com/in/jpedroccruz"
				>
					<img className="h-9 w-9 rounded-full" src="/linkedin.png" alt="" />
					<span>
						<strong className="block text-[20px]">LinkedIn</strong>
						<small className="mt-1 block text-[16px] text-[#858585]">
							linkedin.com/in/jpedroccruz
						</small>
					</span>
					<ChevronRight size={20} className="ml-auto text-[#666]" />
				</a>
			</div>
			<h3 className="mb-3 text-[24px] font-bold">{">"} Or send me a message</h3>
			{isSent && (
				<p className="mb-3 text-[#9fd18b]" role="status">
					Message sent successfully.
				</p>
			)}
			<form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
				<label className="text-[20px] font-bold">
					Name
					<input
						className="mt-1 block w-full rounded-lg border border-[#333] bg-transparent p-3 text-[18px] text-white outline-none focus:border-[#777]"
						type="text"
						required
						value={message.name}
						onChange={(event) =>
							setMessage((current) => ({
								...current,
								name: event.target.value,
							}))
						}
						placeholder="Your name"
					/>
				</label>
				<label className="text-[20px] font-bold">
					Email
					<input
						className="mt-1 block w-full rounded-lg border border-[#333] bg-transparent p-3 text-[18px] text-white outline-none focus:border-[#777]"
						type="email"
						required
						value={message.email}
						onChange={(event) =>
							setMessage((current) => ({
								...current,
								email: event.target.value,
							}))
						}
						placeholder="your@email.com"
					/>
				</label>
				<label className="text-[20px] font-bold">
					Message
					<textarea
						className="mt-1 block w-full resize-y rounded-lg border border-[#333] bg-transparent p-3 text-[18px] text-white outline-none focus:border-[#777]"
						value={message.message}
						required
						onChange={(event) =>
							setMessage((current) => ({
								...current,
								message: event.target.value,
							}))
						}
						placeholder="Write your message..."
						rows={3}
					/>
				</label>
				<button
					className="mt-2 flex items-center justify-center gap-1 rounded-md bg-[#c7c7c7] p-3 text-lg font-bold text-[#111] transition-colors hover:bg-white cursor-pointer"
					type="submit"
					disabled={isPending}
				>
					<Send size={13} />
					{isPending ? "sending_" : "send message_"}
				</button>
			</form>
		</section>
	)
}
