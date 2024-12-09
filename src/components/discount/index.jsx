import {useContext} from "react";
import {useAxios} from "../../App";
import {FunctionContext} from "../../context/functionContext.js";

function DiscountProducts() {
	let {CutText} = useContext(FunctionContext);

	let [{data, loading, error}] = useAxios({
		url: "/discountProducts",
		method: "GET",
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="mb-12 max-[360px]:mb-6 bg-primary py-9 rounded-lg flex justify-center items-center gap-6">
			{data.map((value) => (
				<div
					key={value.id}
					className="w-[11em] p-2 flex flex-col gap-1 justify-between items-center bg-white rounded relative">
					<div
						style={{backgroundImage: `url(${value.preview.images})`}}
						className={`bgStyle w-full h-[9em]`}></div>
					<div className="text-xs font-light">
						<CutText text={value.name} maxLength={42} />
					</div>
					<div className="flex items-center justify-between w-full gap-4 text-xs font-light">
						<div className="font-normal line-through text-gray">
							${value.discountedPrice}
						</div>
						<div className="font-normal text-black">${value.originalPrice}</div>
						<div className="flex items-center justify-center w-12 h-6 rounded-r bg-[#fddbc9] absolute top-3 left-0">
							<p className="text-secondary">{value.discount}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default DiscountProducts;
