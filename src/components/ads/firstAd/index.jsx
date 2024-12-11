import React from "react";

function FirstAdComp() {
	return (
		<section className="w-full grid grid-cols-3 mb-12 gap-8 place-items-start max-xl:text-sm tr max-[1120px]:text-xs max-[980px]:text-[0.65em] max-[830px]:grid-cols-1 max-[830px]:text-sm max-md:text-xs">
			<div
				className={`grid grid-cols-2 bg-[url(/src/assets/images/background-image.png)] bg-no-repeat bg-cover py-6 px-12 rounded-lg w-full col-span-2 gap-4 h-[28.25em] max-[830px]:col-span-1 max-sm:bg-right tr max-[540px]:text-sm max-[460px]:grid-cols-1 max-[460px]:pl-[14em] max-[380px]:pl-[8em] max-[320px]:pl-[3em] tr`}>
				<div className="">
					<p className="text-[1.5em] text-black font-medium">
						Iphone <span className="text-white">15 Series</span>
					</p>
				</div>
				<div className="w-full ml-[4em] max-sm:ml-0 tr max-[540px]:">
					<div className="flex items-center gap-4">
						<div className="flex flex-col items-center justify-center w-12 h-12 border border-black rounded-lg">
							<p className="font-medium">8</p>
							<p className="text-sm font-light">Days</p>
						</div>
						<div className="flex flex-col items-center justify-center w-12 h-12 border border-black rounded-lg">
							<p className="font-medium">8</p>
							<p className="text-sm font-light">Days</p>
						</div>
						<div className="flex flex-col items-center justify-center w-12 h-12 border border-black rounded-lg">
							<p className="font-medium">8</p>
							<p className="text-sm font-light">Days</p>
						</div>
						<div className="flex flex-col items-center justify-center w-12 h-12 border border-black rounded-lg">
							<p className="font-medium">8</p>
							<p className="text-sm font-light">Days</p>
						</div>
					</div>
					<p className="mt-6 text-xl font-medium">
						It feels good to be the first
					</p>
					<p className="text-black font-light mt-2 pl-2 w-[16em]">
						Get ready for the future of smartphones.Experience innovation like
						never before. Stay tuned for the big iPhone 15 pre-sale.
					</p>
					<button className="py-3 px-4 text-white bg-[#0C68F4] rounded-lg mt-6 ml-12">
						Register Now
					</button>
				</div>
			</div>
			<div
				className={`bg-[url(/src/assets/images/background-image-2.png)] bg-no-repeat bg-cover w-full h-full rounded-r-[10px]`}>
				<p className="mt-[1em] text-[1.75em] font-medium text-[#FCC870] text-center max-[830px]:text-[1.75em]">
					Play Station 5
				</p>
				<p className="text-[#005690] font-medium text-xl ml-10 mt-[9em] max-[830px]:text-[#FCC870] max-[830px]:text-[1.75em] max-[830px]:mt-12 max-[830px]:ml-[4em] max-[460px]:text-black max-[360px]:ml-4 tr max-[360px]:text-[#005690] max-[360px]:text-xl max-[360px]:mt-[4em]">
					Digital Edition + 2TB
				</p>
				<button className="py-3 px-8 text-white bg-[#0C68F4] rounded-lg mt-6 ml-[4em] mb-8 max-[830px]:ml-[7em] max-[360px]:ml-4 tr">
					Buy Now
				</button>
			</div>
		</section>
	);
}

export default FirstAdComp;
