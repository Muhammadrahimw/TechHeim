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
function Favorites() {
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

	let favoriteProducts = allData?.filter((item) =>
		state.favorites.includes(item.id)
	);

	let addFavourite = (id) => {
		dispatch({type: "addFavorite", payload: id});
	};
	return (
		<section className="my-12">
			<Swiper
				className="gap-2"
				spaceBetween={5}
				slidesPerView={4}
				breakpoints={{
					0: {slidesPerView: 1},
					320: {slidesPerView: 1},
					480: {slidesPerView: 1.5},
					640: {slidesPerView: 2},
					790: {slidesPerView: 2.5},
					950: {slidesPerView: 3},
					1111: {slidesPerView: 3.5},
					1280: {slidesPerView: 4},
				}}
				onSwiper={(swiper) => console.log()}>
				{favoriteProducts.length > 0 ? (
					favoriteProducts.map((value) => (
						<SwiperSlide className="p-4" key={value.id}>
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
						</SwiperSlide>
					))
				) : (
					<p className="text-[3em] text-gray text-center">
						Sizda yoqitirlgan mahsulotlar yo'q
					</p>
				)}
			</Swiper>
		</section>
	);
}

export default Favorites;
