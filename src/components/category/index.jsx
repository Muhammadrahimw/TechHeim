import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {useAxios} from "../../App";

function CategoryComp() {
	let [{data, loading, error}] = useAxios({
		url: "/categories",
		method: "GET",
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="my-12 max-[360px]:mt-6">
			<Swiper
				className="grid w-full grid-cols-6 gap-6 text-center place-items-center"
				spaceBetween={10}
				// onSlideChange={() => console.log("slide change")}
				slidesPerView={6}
				breakpoints={{
					0: {slidesPerView: 0.5},
					280: {slidesPerView: 1},
					320: {slidesPerView: 1.5},
					450: {slidesPerView: 2},
					530: {slidesPerView: 2.5},
					640: {slidesPerView: 3},
					860: {slidesPerView: 4},
					1080: {slidesPerView: 5},
					1300: {slidesPerView: 6},
				}}
				onSwiper={(swiper) => console.log()}>
				{data.map((value) => (
					<SwiperSlide className="p-2 max-[320px]:text-xl" key={value.id}>
						<div className="w-[11em] h-[12em] rounded p-2 flex justify-center items-center flex-col shadow-md cursor-pointer">
							<img src={`${value.imageUrl}`} alt="" />
							{value.name}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default CategoryComp;
