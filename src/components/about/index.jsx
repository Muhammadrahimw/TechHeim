import React from "react";

function AboutComp() {
	return (
		<section className="flex items-center justify-between gap-2 py-8 max-[1150px]:grid max-[1150px]:grid-cols-2 max-[1150px]:gap-5 max-[1150px]:place-items-center max-[720px]:text-sm tr max-[530px]:grid-cols-1 max-[530px]:place-items-start max-[530px]:text-[0.95em] max-[360px]:text-xs max-[320px]:text-[0.65em]">
			<div className="flex items-center gap-4">
				<div>
					<img src="/src/assets/images/icons/pcicon.svg" alt="laptop" />
				</div>
				<p className="text-xl font-light text-black">
					Latest and Greatest Tech
				</p>
			</div>
			<div className="flex items-center gap-4">
				<div>
					<img
						src="/src/assets/images/icons/protecticon.svg"
						alt="protecticon"
					/>
				</div>
				<p className="text-xl font-light text-black">Guarantee</p>
			</div>
			<div className="flex items-center gap-4">
				<div>
					<img src="/src/assets/images/icons/caricon.svg" alt="car" />
				</div>
				<p className="text-xl font-light text-black">
					Free Shipping over 1000$
				</p>
			</div>
			<div className="flex items-center gap-4">
				<div>
					<img src="/src/assets/images/icons/timeicon.svg" alt="clock" />
				</div>
				<p className="text-xl font-light text-black">24/7 Support</p>
			</div>
		</section>
	);
}

export default AboutComp;
