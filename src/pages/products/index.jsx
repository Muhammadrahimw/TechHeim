import {useAxios} from "../../App";
import {Link, Outlet, useParams} from "react-router-dom";
import NotFoundComp from "../../components/NotFound";
import {AiOutlineRight} from "react-icons/ai";
import {Image} from "antd";
import {createContext, useContext, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {IoIosHeartEmpty} from "react-icons/io";
import {GiRoundStar} from "react-icons/gi";
import {RiDiscountPercentFill} from "react-icons/ri";
import {FunctionContext} from "../../context/functionContext.js";
import {FaStar} from "react-icons/fa6";
import AllProductsComp from "../../components/dashboard/allProducts/index.jsx";

export let ProductContext = createContext();
export let AllDataContext = createContext();

function ProductPage() {
	let [thumbsSwiper, setThumbsSwiper] = useState(null);

	let {CutText} = useContext(FunctionContext);

	let {scrollToTop} = useContext(FunctionContext);

	let {id} = useParams();

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

	let product = allData.find((value) => value.id == id);

	if (!product) return <NotFoundComp />;

	return (
		<section>
			<div className="text-[1.1em] text-gray font-light flex items-center gap-1 pt-6 pb-10">
				<Link to={"/"}>Home</Link> <AiOutlineRight /> Products{" "}
				<AiOutlineRight />
				<span className="text-blue-500">{product.category}</span>
			</div>
			<div className="flex items-start justify-between max-[1150px]:grid max-[1150px]:grid-cols-2 max-[1150px]:gap-6 max-sm:grid-cols-1">
				<div className="w-[28em] mt-6 max-[850px]:col-span-2 max-[850px]:w-full max-sm:col-span-1">
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						spaceBetween={10}
						thumbs={{swiper: thumbsSwiper}}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper2">
						{product.preview.images.map((value, index) => (
							<SwiperSlide className="relative" key={index}>
								<Image
									width={
										window.innerWidth > 850
											? 450
											: window.innerWidth > 640
											? 550
											: window.innerWidth > 280
											? 400
											: 240
									}
									src={`${value}`}
								/>
								<IoIosHeartEmpty className="absolute text-3xl cursor-pointer top-5 left-5 max-[360px]:top-0 max-[360px]:left-0 tr" />
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="flex gap-2 mt-2 mySwiper">
						{product.preview.images.map((value, index) => (
							<SwiperSlide className="cursor-pointer" key={index}>
								<img width={300} src={`${value}`} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="max-[1400px]:text-sm tr max-xl:text-xs max-[1150px]:text-base max-lg:text-xs max-lg:pl-[8em] max-[850px]:pl-0 max-sm:text-base max-sm:w-full max-[430px]:text-sm max-[360px]:text-xs">
					<p className="text-xl max-w-[20em] font-medium">{product.name}</p>
					<div className="flex items-center gap-2 mt-2">
						<div className="flex items-center text-white justify-center w-[3em] rounded h-6 p-1 bg-primary">
							<GiRoundStar className="" />
							{product.rating}
						</div>
						<p className="text-[1.1em] text-gray"> | sold 125</p>
					</div>
					<div className="flex items-center gap-8 mt-6 max-[430px]:flex-wrap">
						<div className="flex items-center gap-1 text-sm font-medium text-gray">
							<img src="/src/assets/images/icons/shop.svg" alt="shop" />
							<p>In Stock</p>
						</div>
						<div className="flex items-center gap-1 text-sm font-medium text-gray">
							<img src="/src/assets/images/icons/verify.svg" alt="verify" />
							<p>Guaranteed</p>
						</div>
						<div className="flex items-center gap-1 text-sm font-medium text-gray">
							<img src="/src/assets/images/icons/truck.svg" alt="truck" />
							<p>Free Delivery</p>
						</div>
					</div>
					<div className="flex items-start gap-[4em] mt-8 ml-10">
						<ul className="flex flex-col gap-3 list-disc text-gray">
							<li>brand</li>
							<li>Model Name </li>
							<li>Screen Size</li>
							<li>Hard Disk Size</li>
							<li>CPU Model</li>
							<li>Ram Memory</li>
						</ul>
						<ul className="flex flex-col gap-3">
							<li className="font-medium">{product.brand}</li>
							<li className="font-medium">{product.modelName}</li>
							<li className="font-medium">{product.screenSize}</li>
							<li className="font-medium">{product.hardDiskSize}</li>
							<li className="font-medium">{product.cpuModel}</li>
							<li className="font-medium">{product.ramMemory}</li>
						</ul>
					</div>
				</div>
				<div className="p-6 rounded-lg custom-shadow w-[19.5em] max-[1400px]:text-sm tr max-xl:text-xs max-[1150px]:text-base max-lg:text-xs max-sm:text-base max-sm:w-full max-[430px]:text-sm max-[360px]:text-xs">
					<div className="flex items-center justify-between gap-4">
						<p className="text-xl font-medium text-black">
							$ {product.discountedPrice || product.price}
						</p>
						<p className="flex items-center gap-1 font-medium text-secondary">
							<RiDiscountPercentFill className="text-2xl" />
							{product.discount || 0 + `%`}
						</p>
					</div>
					<p className="mt-1 font-light text-gray opacity-70">
						last price $<span>{product.originalPrice || product.price}</span>
					</p>
					<div className="flex flex-col gap-3 mt-3">
						<div className="flex items-center gap-2">
							<input
								className="scale-125 cursor-pointer"
								id="now"
								name="pay"
								type="radio"
							/>
							<label htmlFor="now">Pay Now</label>
						</div>
						<div className="flex items-center gap-2">
							<input
								className="scale-125 cursor-pointer"
								id="after"
								name="pay"
								type="radio"
							/>
							<label htmlFor="after">Buy in installments</label>
						</div>
					</div>
					<p className="mt-1 text-sm text-center text-gray">
						choose your installments period
					</p>
					<div className="flex items-center justify-start gap-2 mt-4 max-sm:justify-between">
						<div className="w-[3.75em] h-[3.25em] rounded border border-blue-500 opacity-50 p-2 flex flex-col justify-center items-center cursor-pointer">
							<p className="text-sm">3</p>
							<p className="text-sm">Months</p>
						</div>
						<div className="w-[3.75em] h-[3.25em] rounded border border-gray opacity-50 p-2 flex flex-col justify-center items-center cursor-pointer">
							<p className="text-sm">6</p>
							<p className="text-sm">Months</p>
						</div>
						<div className="w-[3.75em] h-[3.25em] rounded border border-gray opacity-50 p-2 flex flex-col justify-center items-center cursor-pointer">
							<p className="text-sm">12</p>
							<p className="text-sm">Months</p>
						</div>
						<div className="w-[3.75em] h-[3.25em] rounded border border-gray opacity-50 p-2 flex flex-col justify-center items-center cursor-pointer">
							<p className="text-sm">18</p>
							<p className="text-sm">Months</p>
						</div>
					</div>
					<button className="w-full h-12 mt-4 text-blue-600 border-2 border-blue-600 rounded-lg">
						Add to cart
					</button>
				</div>
			</div>
			<div className="mt-12">
				<div className="flex items-center gap-8 mb-12">
					<Link to={"technical"}>
						<p className="text-xl font-light cursor-pointer">
							Technical Details
						</p>
					</Link>
					<Link to={"comments"}>
						<p className="text-xl font-light cursor-pointer">Comments</p>
					</Link>
				</div>
				<div>
					<ProductContext.Provider value={{product, allData}}>
						<Outlet />
					</ProductContext.Provider>
				</div>
			</div>
			<div>
				<p className="mb-3 text-xl font-light cursor-pointer">
					Similar Products
				</p>
				<div>
					<Swiper
						className="gap-2 mb-6"
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
						{allData.map((value) =>
							value.category === product.category ? (
								<SwiperSlide className="p-4" key={value.id}>
									<Link
										onClick={scrollToTop}
										key={value.id}
										to={`/product/${value.id}/technical`}>
										<div className="w-full p-4 rounded shadow-md">
											<div
												style={{
													backgroundImage: `url(${value.preview.images})`,
												}}
												className="max-w-[16em] h-[12em] bgStyle bg-cover max-[480px]:max-w-full"></div>
											<div className="my-4 border-t rounded-full border-gray"></div>
											<div className="h-[5.5em] flex flex-col justify-between items-start gap-2">
												<p className="font-light">
													<CutText text={value.name} maxLength={42} />
												</p>
												<div className="flex justify-between items-center gap-4 w-full text-[1.1em]">
													<p className="font-light">
														${value.price || value.discountedPrice}
													</p>
													<p className="flex items-center gap-1 font-light">
														<FaStar className="scale-110 text-primary" />
														{value.rating}
													</p>
												</div>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							) : (
								""
							)
						)}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default ProductPage;
