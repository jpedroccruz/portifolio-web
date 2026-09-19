import { ArrowLeft, ArrowUpRight, CircleX, Plus } from "lucide-react"
import Footer from "../../../components/footer"
import useProject from "../../../hooks/use-project"
import useStack from "../../../hooks/use-stacks"
import Projects from "../../(public)/home/components/projects"
import Stacks from "../../(public)/home/components/stacks"

export default function Root() {
	const { data: projects } = useProject()
	const { data: stacks } = useStack()

	return (
		<div className="flex min-h-screen flex-col bg-[#101010] text-[#f3f3f3] selection:bg-white selection:text-black">
			<main className="mx-auto w-full flex max-w-240 flex-col gap-12 px-7 py-8 md:gap-20 md:px-0 md:py-12">
				<a
					className="flex w-fit items-center gap-2 text-[18px] text-[#909090] transition-colors hover:text-white"
					href="/"
				>
					<ArrowLeft size={20} />
					<span>return {"<Home/>"}</span>
				</a>

				<Stacks stacks={stacks ?? null} showAddButton />
				<Projects projects={projects ?? null} showAddButton />
			</main>

			<Footer />
		</div>
	)
}
