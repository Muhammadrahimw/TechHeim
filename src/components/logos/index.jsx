import React from "react";

function LogosComp() {
	return (
		<section className="max-xl:">
			<h2 className="text-[2em] font-medium max-[480px]:text-[1.5em] max-[360px]:text-xl tr">
				Top Brands
			</h2>
			<div className="mt-4 mb-8 border-t-2 rounded-full border-gray"></div>
			<div className="flex justify-between items-center gap-4 mb-8 max-[1180px]:grid max-[1180px]:grid-cols-3 max-[1180px]:place-items-center tr max-md:grid-cols-2 max-md:gap-8 max-[480px]:grid-cols-1 max-[480px]:gap-12">
				<div>
					<img src="/src/assets/images/logos/apple.svg" alt="apple logo" />
				</div>
				<div>
					<img src="/src/assets/images/logos/sony.svg" alt="sony logo" />
				</div>
				<div>
					<img src="/src/assets/images/logos/samsung.svg" alt="samsung logo" />
				</div>
				<div>
					<img src="/src/assets/images/logos/canon.svg" alt="canon logo" />
				</div>
				<div>
					<img src="/src/assets/images/logos/huawei.svg" alt="huawei logo" />
				</div>
				<div>
					<img src="/src/assets/images/logos/lenovo.svg" alt="lenovo logo" />
				</div>
			</div>
		</section>
	);
}

export default LogosComp;
