export default function Whoami() {
	return (
		<section id="whoami">
			<h1 className="mb-7 flex items-center gap-2 text-[34px] font-bold md:mb-8 md:text-[36px]">
				$ whoami
			</h1>
			<div className="flex flex-col gap-6 md:items-center md:gap-14 md:flex-row">
				<img
					className="mx-auto aspect-square w-88 rounded-full object-cover md:mx-0 md:w-100"
					src="/me.png"
					alt="Joao Pedro Cruz"
				/>
				<div>
					<h2 className="mb-1 text-[32px] font-medium md:text-[34px]">
						Joao Pedro Cruz
					</h2>
					<h3 className="mb-5 text-[24px] font-bold md:mb-8 md:text-[24px]">
						{">"} Software Developer_
					</h3>
					<p className="mb-4 text-[20px] leading-[1.4] text-[#909090] md:mb-8 md:text-[20px]">
						I build web applications and backend systems focused on performance,
						maintainability and user experience.
					</p>
					<div className="rounded-xl border border-[#454545] p-4 text-[20px] md:text-[20px]">
						<strong className="text-[22px]">{">"} Currently</strong>
						<p className="mt-2 leading-tight text-[#909090]">
							-{">"} Building Mimo Marmitas
							<br />-{">"} Learning Software Architecture
							<br />-{">"} Exploring TypeScript ecosystem
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
