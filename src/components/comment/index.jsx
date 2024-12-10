import React, {useContext} from "react";
import {ProductContext} from "../../pages/products";
import {FaStar} from "react-icons/fa6";

function CommentComp() {
	let product = useContext(ProductContext);

	return (
		<section className="mb-12">
			<div>
				<div className="flex items-center gap-1 text-2xl">
					<p>comment of </p>
					<strong className="font-medium tracking-wider">
						{product.product.comments[0].user}:
					</strong>
				</div>
				<p className="mt-2 text-xl text-black">
					{product.product.comments[0].comment}
				</p>
				<div className="flex items-center gap-2 mt-2">
					<p>rating:</p>
					<span className="flex items-center">
						<FaStar /> {product.product.comments[0].rating}
					</span>
				</div>
			</div>
		</section>
	);
}

export default CommentComp;
