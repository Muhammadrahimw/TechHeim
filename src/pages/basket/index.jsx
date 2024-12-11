import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {useAxios} from "../../App";
import {FaStar} from "react-icons/fa6";
import {useContext} from "react";
import {FunctionContext} from "../../context/functionContext.js";
import {Link} from "react-router-dom";
import {CiHeart} from "react-icons/ci";
import {FaHeart} from "react-icons/fa";
import {reduceContext} from "../../context/useReduceContext/index.jsx";

function BasketPage() {
	let {CutText} = useContext(FunctionContext);
	let {state, dispatch} = useContext(reduceContext);

	let allDataFunc = (...url) => {
		let allData = url.map((value) => {
			let [{data, loading, error}] = useAxios({
				url: `/${value}`,
				method: "GET",
			});

			if (data) return data;
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error: {error.message}</p>;
		});
		return allData.flat(1);
	};

	let allData = allDataFunc(`discountProducts`, `newProducts`, `bestSellers`);

	let basketProducts = JSON.parse(localStorage.getItem("basket"));

	let favoriteProducts = allData?.filter((item) =>
		basketProducts.includes(item.id)
	);

	let addFavourite = (id) => {
		dispatch({type: "addFavorite", payload: id});
	};
	return (
		<section className="my-12">
			{favoriteProducts.length > 0 ? (
				favoriteProducts.map((value) => (
					<Link key={value.id} to={`/product/${value.id}/technical`}>
						<div className="w-full p-4 rounded shadow-md">
							<div
								style={{backgroundImage: `url(${value.preview.images})`}}
								className="max-w-[16em] h-[12em] bgStyle bg-cover max-[480px]:max-w-full relative">
								{state.favorites.includes(value.id) ? (
									<FaHeart
										className="absolute top-0 left-0 text-3xl text-red-500 cursor-pointer"
										onClick={(e) => {
											e.preventDefault();
											addFavourite(value.id);
										}}
									/>
								) : (
									<CiHeart
										className="absolute top-0 left-0 text-3xl cursor-pointer"
										onClick={(e) => {
											e.preventDefault();
											addFavourite(value.id);
										}}
									/>
								)}
							</div>
							<div className="my-4 border-t rounded-full border-gray"></div>
							<div className="h-[5.5em] flex flex-col justify-between items-start gap-2">
								<p className="font-light">{value.name}</p>
								<div className="flex justify-between items-center gap-4 w-full text-[1.1em]">
									<p className="font-light">${value.price}</p>
									<p className="flex items-center gap-1 font-light">
										<span className="scale-110 text-primary">
											<FaStar />
										</span>
										{value.rating}
									</p>
								</div>
							</div>
						</div>
					</Link>
				))
			) : (
				<p className="text-[3em] text-gray text-center">
					Sizda yoqitirlgan mahsulotlar yo'q
				</p>
			)}
		</section>
	);
}

export default BasketPage;
