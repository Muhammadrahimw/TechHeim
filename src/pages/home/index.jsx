import React from "react";
import ShowcaseComp from "../../components/showcase";
import CategoryComp from "../../components/category";
import DiscountProducts from "../../components/discount";
import NewProducts from "../../components/newProducts";
import FirstAdComp from "../../components/ads/firstAd";
import BestProducts from "../../components/bestSellers";
import LogosComp from "../../components/logos";
import SecondAd from "../../components/ads/secondAd";
import BlogComp from "../../components/blog";
import AboutComp from "../../components/about";

function HomePage() {
	return (
		<section>
			<ShowcaseComp />
			<CategoryComp />
			<DiscountProducts />
			<NewProducts />
			<FirstAdComp />
			<BestProducts />
			<LogosComp />
			<SecondAd />
			<BlogComp />
			<AboutComp />
		</section>
	);
}

export default HomePage;
