import React from "react";

function SecondAd() {
	return (
		<section
			className={`bg-[url(/src/assets/images/banner.png)] bg-no-repeat w-full bg-cover bg-center flex justify-between items-center gap-4 py-10 rounded-lg mb-12 max-[1000px]:text-sm max-[880px]:text-xs max-md:flex-col max-md:gap-6 max-md:text-base max-[480px]:text-sm max-[360px]:text-[0.6em] tr`}>
			<div className="ml-10 text-center max-md:ml-0">
				<h2 className="text-[2.5em] font-medium text-white mt-4">
					SMART WATCH
				</h2>
				<p className="mt-2 text-3xl font-light text-white">
					Various designs and brands
				</p>
				<div className="flex justify-center">
					<button className="px-5 py-1 mt-8 rounded-lg text-primary bg-secondary">
						view
					</button>
				</div>
			</div>
			<div className="w-[32em] mr-[8em] max-[1200px]:mr-8 max-[1080px]:w-[28em] max-md:w-full max-md:mr-0 max-md:px-8 tr">
				<img
					className="w-full"
					src="/src/assets/images/wriswatch-4.png"
					alt="smart watch"
				/>
			</div>
		</section>
	);
}

export default SecondAd;
