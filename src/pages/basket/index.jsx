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
import {AiOutlineRight} from "react-icons/ai";
import {MdDeleteOutline} from "react-icons/md";

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
		basketProducts?.includes(item.id)
	);

	let addFavourite = (id) => {
		dispatch({type: "addFavorite", payload: id});
	};

	let allPrice = [];

	favoriteProducts.map((value) =>
		allPrice.push(Number(value.discountedPrice) || Number(value.price))
	);

	allPrice =
		allPrice.length > 0
			? Math.ceil(
					allPrice.reduce((acc, value) => {
						return acc + value;
					})
			  )
			: Math.ceil(allPrice);

	let removeProduct = (id) => {
		dispatch({type: "removeBasket", payload: id});
	};

	return (
		<section className="my-12">
			<div className="text-[1.1em] text-gray font-light flex items-center gap-1 pt-6 pb-10">
				<Link to={"/"}>Home</Link> <AiOutlineRight /> Products
				<AiOutlineRight />
				<span className="text-blue-500">basket</span>
			</div>
			<div className="w-full my-8 mt-4">
				{favoriteProducts.length > 0 ? (
					<div className="grid w-full grid-cols-7 gap-10">
						<p className="text-xl font-semibold">Description</p>
						<p className="text-xl font-semibold">Due Amount</p>
						<p className="text-xl font-semibold">Due Date</p>
						<p className="text-xl font-semibold">Actual Amount</p>
						<p className="text-xl font-semibold">Payment Date</p>
						<p className="text-xl font-semibold">Total</p>
						<p className="text-xl font-semibold">delete</p>
					</div>
				) : (
					""
				)}

				<div className="">
					{favoriteProducts.length > 0 ? (
						favoriteProducts.map((value) => (
							<div
								key={value.id}
								className="grid w-full grid-cols-7 gap-10 pb-5 my-6 border-b border-gray">
								<Link key={value.id} to={`/product/${value.id}/technical`}>
									<div
										style={{backgroundImage: `url(${value.preview.images})`}}
										className="max-w-[16em] h-[5em] bgStyle bg-cover max-[480px]:max-w-full relative">
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
								</Link>
								<div className="flex items-center text-xl font-semibold">
									<p className="font-light">
										${value.originalPrice || value.price}
									</p>
								</div>
								<div className="flex items-center text-xl font-semibold">
									<p className="font-light">{value.releaseDate}</p>
								</div>
								<div className="flex items-center text-xl font-semibold">
									<p className="font-light">
										${value.discountedPrice || value.price}
									</p>
								</div>
								<div className="flex items-center justify-center text-xl font-semibold">
									<p className="font-light">-</p>
								</div>
								<div className="flex items-center text-xl font-semibold">
									<p className="font-light">
										${value.discountedPrice || value.price}
									</p>
								</div>
								<div className="flex items-center justify-start text-xl font-semibold">
									<MdDeleteOutline
										onClick={(e) => removeProduct(value.id)}
										className="text-[1.8em] cursor-pointer"
									/>
								</div>
							</div>
						))
					) : (
						<p className="text-[3em] text-gray text-center">
							Sizda hali mahsulotlar yo'q
						</p>
					)}
				</div>
				{favoriteProducts.length > 0 ? (
					<div className="flex items-center justify-start gap-4 mt-8">
						<div className="w-[22em] h-[3.5em] rounded p-4 flex justify-between items-center gap-4 px-2 bg-[#f9f9f9]">
							<p className="text-xl font-medium">Subtotal</p>
							<b className="text-xl font-bold">${allPrice}</b>
						</div>
						<button className="w-[10em] h-[3.5em] rounded text-white bg-blue-600">
							pay
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</section>
	);
}

export default BasketPage;
