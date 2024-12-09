import React from "react";
import ShowcaseComp from "../../components/showcase";
import CategoryComp from "../../components/category";
import DiscountProducts from "../../components/discount";

function HomePage() {
	return (
		<section>
			<ShowcaseComp />
			<CategoryComp />
			<DiscountProducts />
		</section>
	);
}

export default HomePage;
