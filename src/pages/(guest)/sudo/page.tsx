import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import useLogin from "../../../hooks/use-login"

export default function Sudo() {
	const { mutate, isPending, error } = useLogin()
	const navigate = useNavigate()

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const username = formData.get("username")
		const password = formData.get("password")

		if (typeof username !== "string" || typeof password !== "string") return

		mutate({ username, password }, { onSuccess: () => navigate("/root") })
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-[#101010] px-6 text-[#f3f3f3]">
			<form
				className="flex w-full max-w-100 flex-col gap-6"
				onSubmit={handleSubmit}
			>
				<label
					className="flex flex-col gap-4 text-[28px] leading-6"
					htmlFor="username"
				>
					<span>$ Username</span>
					<input
						className="h-8 border-0 border-b border-[#777] bg-transparent px-0 text-[24px] text-[#f3f3f3] outline-none placeholder:text-[#777] focus:border-[#f3f3f3]"
						id="username"
						name="username"
						placeholder="Your username"
						type="text"
					/>
				</label>

				<label
					className="flex flex-col gap-4 text-[28px] leading-6"
					htmlFor="password"
				>
					<span>$ Password</span>
					<input
						className="h-8 border-0 border-b border-[#777] bg-transparent px-0 text-[24px] text-[#f3f3f3] outline-none placeholder:text-[#777] focus:border-[#f3f3f3]"
						id="password"
						name="password"
						placeholder="Your password"
						type="password"
					/>
				</label>

				<button
					className="h-10 rounded-lg bg-[#c7c7c7] text-lg font-bold text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7c7c7] cursor-pointer"
					disabled={isPending}
					type="submit"
				>
					{isPending ? "> logging_in..." : "> login_"}
				</button>

				{error && <p className="text-red-400">{error.message}</p>}
			</form>
		</main>
	)
}
