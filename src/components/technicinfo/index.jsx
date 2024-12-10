import {useContext} from "react";
import {ProductContext} from "../../pages/products";
import {FunctionContext} from "../../context/functionContext.js";

function TechInfoComp() {
	let product = useContext(ProductContext);
	let {CutText} = useContext(FunctionContext);
	return (
		<div className="w-[50em] mb-12">
			<p className="mb-4 text-xl font-medium">Technical Details</p>
			<div className="flex flex-col w-full gap-1">
				<div className="flex items-center justify-start w-full bg-[#F9F9F9] rounded-lg px-3 py-4">
					<p className="font-medium text-gray w-[19em]">Display</p>
					<p className="font-light text-gray">
						<CutText text={product.display} maxLength={50} />
					</p>
				</div>
				<div className="flex items-center justify-start w-full px-3 py-4 rounded-lg">
					<p className="font-medium text-gray w-[19em]">Graphics</p>
					<p className="font-light text-gray">
						<CutText text={product.graphics} maxLength={50} />
					</p>
				</div>
				<div className="flex items-center justify-start w-full bg-[#F9F9F9] rounded-lg px-3 py-4">
					<p className="font-medium text-gray w-[19em]">Processor</p>
					<p className="font-light text-gray">
						<CutText text={product.processor} maxLength={50} />
					</p>
				</div>
				<div className="flex items-center justify-start w-full px-3 py-4 rounded-lg">
					<p className="font-medium text-gray w-[19em]">In the box</p>
					<p className="font-light text-gray">
						<CutText text={product.inTheBox} maxLength={50} />
					</p>
				</div>
				<div className="flex items-center justify-start w-full bg-[#F9F9F9] rounded-lg px-3 py-4">
					<p className="font-medium text-gray w-[19em]">Height</p>
					<p className="font-light text-gray">
						<CutText
							text={product?.dimensions?.height || product.height}
							maxLength={50}
						/>
					</p>
				</div>
				<div className="flex items-center justify-start w-full px-3 py-4 rounded-lg">
					<p className="font-medium text-gray w-[19em]">Width</p>
					<p className="font-light text-gray">
						<CutText
							text={product?.dimensions?.width || product.width}
							maxLength={50}
						/>
					</p>
				</div>
				<div className="flex items-center justify-start w-full bg-[#F9F9F9] rounded-lg px-3 py-4">
					<p className="font-medium text-gray w-[19em]">Weight</p>
					<p className="font-light text-gray">
						<CutText
							text={product?.dimensions?.weight || product.weight}
							maxLength={50}
						/>
					</p>
				</div>
				<div className="flex items-center justify-start w-full px-3 py-4 rounded-lg">
					<p className="font-medium text-gray w-[19em]">Release Date</p>
					<p className="font-light text-gray">
						<CutText text={product.releaseDate} maxLength={50} />
					</p>
				</div>
			</div>
		</div>
	);
}

export default TechInfoComp;
