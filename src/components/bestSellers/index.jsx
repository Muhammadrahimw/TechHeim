import {LuChevronRight} from "react-icons/lu";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {useAxios} from "../../App";
import {FaStar} from "react-icons/fa6";
import {useContext} from "react";
import {FunctionContext} from "../../context/functionContext.js";

function BestProducts() {
	let {CutText} = useContext(FunctionContext);

	let [{data, loading, error}] = useAxios({
		url: "/bestSellers",
		method: "GET",
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="my-12 max-[320px]:text-sm tr">
			<div className="flex justify-between items-center gap-4 w-full">
				<h2 className="text-[2em] font-medium max-[480px]:text-[1.5em] max-[360px]:text-xl tr">
					Best Sellers
				</h2>
				<button className="flex items-center gap-1 mt-1">
					<p>View all</p>
					<LuChevronRight />
				</button>
			</div>
			<div className="mb-8 mt-4 border-t-2 border-gray rounded-full"></div>
			<div>
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
					{data.map((value) => (
						<SwiperSlide className="p-4" key={value.id}>
							<div className="shadow-md p-4 rounded w-full">
								<div
									style={{backgroundImage: `url(${value.preview.images})`}}
									className="max-w-[16em] h-[12em] bgStyle bg-cover max-[480px]:max-w-full"></div>
								<div className="my-4 border-t border-gray rounded-full"></div>
								<div className="h-[5.5em] flex flex-col justify-between items-start gap-2">
									<p className="font-light">
										<CutText text={value.name} maxLength={42} />
									</p>
									<div className="flex justify-between items-center gap-4 w-full text-[1.1em]">
										<p className="font-light">${value.price}</p>
										<p className="flex items-center gap-1 font-light">
											<FaStar className="text-primary scale-110" />
											{value.rating}
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default BestProducts;
