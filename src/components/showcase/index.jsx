import React from "react";

function ShowcaseComp() {
	return (
		<section className="flex items-center justify-between w-full gap-2 max-[1200px]:text-sm tr max-lg:text-xs max-[830px]:text-[0.55em] max-sm:flex-col max-sm:text-base max-sm:text-center max-[480px]:text-[0.7em] max-[360px]:text-[0.55em]">
			<div className="max-sm:w-full max-sm:mt-4">
				<h1 className="text-[4em] text-darkPrimary font-semibold tracking-wider">
					Tech Heim
				</h1>
				<p className="text-[2em] font-medium text-darkPrimary tracking-wide mt-3 max-sm:mt-1">
					"Join the <span className="text-secondary">digital revolution</span> "
				</p>
				<button className="px-[5.8em] py-3 bg-secondary rounded-md text-white cursor-pointer mt-[5.5em] max-sm:mt-12 max-sm:mb-8 max-sm:text-[1.1em]">
					Explore More
				</button>
			</div>
			<div className="w-[35em] max-[1200px]:w-[32em] tr max-sm:w-full">
				<img
					className="w-full"
					src="/src/assets/images/showcase-img.png"
					alt="laptop"
				/>
			</div>
		</section>
	);
}

export default ShowcaseComp;
