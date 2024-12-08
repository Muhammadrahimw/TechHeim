import {BsHeart} from "react-icons/bs";
import {BsBasket3} from "react-icons/bs";
import {RiFacebookBoxLine, RiUserLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";
import {HiOutlineXMark} from "react-icons/hi2";
import {useState} from "react";
import {CiLocationOn} from "react-icons/ci";
import {FiPhoneCall} from "react-icons/fi";
import {MdOutlineMailOutline} from "react-icons/md";
import {FaChevronLeft, FaChevronRight, FaInstagram} from "react-icons/fa6";
import {SlSocialTwitter} from "react-icons/sl";
import {FaRegCaretSquareRight} from "react-icons/fa";
import {TbMessageQuestion} from "react-icons/tb";

function MainLayoutComp() {
	let [nav, setNav] = useState(false);
	return (
		<>
			<header className="py-4 border-b border-blue-400">
				<div className="ctr flex justify-between items-center gap-4">
					<Link className="max-md:hidden" to="/">
						<img src="/src/assets/images/logos/logo.svg" alt="logo" />
					</Link>
					<HiMiniBars3
						onClick={() => setNav((prevNav) => !prevNav)}
						className="scale-150 hidden max-md:block"
					/>
					<p className="text-xl text-lightPrimary hidden max-md:block">
						Tech Heim
					</p>
					<div
						style={{left: nav ? `0%` : `-200%`}}
						className={`links flex items-center gap-[4em] text-[1.15em] font-light text-black max-lg:gap-6 tr max-md:fixed max-md:top-0 max-md:flex-col max-md:gap-6 max-md:w-[75%] max-md:h-screen max-md:justify-center max-md:text-3xl max-md:backdrop-blur-lg max-sm:w-screen z-50`}>
						<HiOutlineXMark
							onClick={() => setNav((prevNav) => !prevNav)}
							className="scale-125 hidden max-md:block fixed top-8 right-10"
						/>
						<p className="cursor-pointer">Home</p>
						<p className="cursor-pointer">Ploducts</p>
						<p className="cursor-pointer">Blog</p>
						<p className="cursor-pointer">FAQ</p>
						<p className="cursor-pointer">Contact Us</p>
					</div>
					<div className="contact flex items-center gap-5 scale-125 max-[360px]:hidden tr">
						<BsHeart className="cursor-pointer" />
						<BsBasket3 className="cursor-pointer" />
						<RiUserLine className="scale-110 cursor-pointer" />
					</div>
				</div>
			</header>
			<footer className="bg-darkPrimary pt-12 max-[1150px]:text-sm tr max-lg:text-base max-[300px]:text-sm">
				<div className="top ctr">
					<div className="pb-8 flex justify-between items-start gap-4 max-lg:grid max-lg:grid-cols-3 max-lg:gap-4 tr max-[930px]:flex max-[930px]:flex-wrap max-[930px]:gap-12 max-sm:grid max-sm:grid-cols-2 max-[360px]:grid-cols-1">
						<div className="flex flex-col gap-2">
							<b className="text-white font-medium">Company</b>
							<a href="#" className="text-gray ">
								about us
							</a>
							<a href="#" className="text-gray ">
								blog
							</a>
							<a href="#" className="text-gray ">
								returns
							</a>
							<a href="#" className="text-gray ">
								order
							</a>
							<a href="#" className="text-gray ">
								status
							</a>
						</div>
						<div className="flex flex-col gap-2">
							<b className="text-white font-medium">Info</b>
							<a href="#" className="text-gray ">
								How it works?
							</a>
							<a href="#" className="text-gray ">
								our promises
							</a>
							<a href="#" className="text-gray ">
								FAQ
							</a>
						</div>
						<div className="flex flex-col gap-2 max-sm:col-span-2 max-[360px]:col-span-1">
							<b className="text-white font-medium">Contact us</b>
							<div className="flex items-center gap-2">
								<CiLocationOn className="text-gray scale-125" />
								<a
									target="_blank"
									href="https://maps.app.goo.gl/uLkqKKVj1WvD5wnu6"
									className="text-gray ">
									123 Main Street, Anytown,USA
								</a>
							</div>
							<div className="flex items-center gap-2">
								<FiPhoneCall className="text-gray" />
								<a href="tel:+1 (555) 123-4567" className="text-gray ">
									+1 (555) 123-4567
								</a>
							</div>
							<div className="flex items-center gap-2">
								<MdOutlineMailOutline className="text-gray scale-125" />
								<a
									href="mailto:TechHeimSupport@gmail.com"
									className="text-gray ">
									TechHeimSupport@gmail.com
								</a>
							</div>
						</div>
						<div className="flex flex-col gap-2 max-lg:col-span-2 max-[360px]:col-span-1">
							<b className="text-white font-medium mb-2">
								Sign up for News and updates
							</b>
							<div className="flex items-center gap-1 border border-white p-3 rounded-lg">
								<RiUserLine className="scale-[160%] text-white" />
								<input
									className="bg-transparent text-white pl-2 outline-none w-full"
									type="email"
									placeholder="E-mail Address"
								/>
								<FaChevronRight className="scale-125 text-white cursor-pointer" />
							</div>
							<div className="flex items-center justify-start gap-6 text-white mt-4">
								<a href="#">
									<RiFacebookBoxLine className="scale-[185%]" />
								</a>
								<a href="#">
									<SlSocialTwitter className="scale-[155%]" />
								</a>
								<a href="#">
									<FaInstagram className="scale-[160%]" />
								</a>
								<a href="#">
									<FaRegCaretSquareRight className="scale-[160%]" />
								</a>
							</div>
						</div>
						<div className="text-white flex flex-col justify-between h-full gap-[3.25em] max-lg:items-end max-sm:items-start max-sm:flex-row max-sm:justify-start">
							<div className="w-10 h-10 rounded-full bg-[#AECDFB] flex justify-center items-center cursor-pointer">
								<a href="#">
									<TbMessageQuestion className="scale-150 text-black" />
								</a>
							</div>
							<div
								onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
								className="w-10 h-10 rounded-full bg-[#AECDFB] flex justify-center items-center cursor-pointer">
								<FaChevronLeft className="text-black rotate-90" />
							</div>
						</div>
					</div>
					<div className="flex items-center gap-1">
						<div className="cursor-pointer">
							<img
								src="/src/assets/images/logos/americanexpress.svg"
								alt="americanexpress for pay"
							/>
						</div>
						<div className="cursor-pointer">
							<img
								src="/src/assets/images/logos/mastercard.svg"
								alt="mastercard for pay"
							/>
						</div>
						<div className="cursor-pointer">
							<img
								src="/src/assets/images/logos/paypal.svg"
								alt="paypal for pay"
							/>
						</div>
						<div className="cursor-pointer">
							<img src="/src/assets/images/logos/visa.svg" alt="visa for pay" />
						</div>
					</div>
				</div>
				<div className="bottom text-white ctr py-4 flex justify-between items-center gap-4 max-md:flex-col tr max-[530px]:text-xl max-[360px]:items-start">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded-full border-white flex justify-center items-center border-2">
							C
						</div>
						<p className="text-xs">2023 Tech Heim. </p>
					</div>
					<div className="flex items-center gap-12 text-xs max-[530px]:grid max-[530px]:gap-4 max-[530px]:grid-cols-2 max-[530px]:w-full max-[360px]:grid-cols-1">
						<a href="#">cookie settings</a>
						<a href="#">Privacy Policy</a>
						<a href="#">Terms and Conditions </a>
						<a href="#">Imprint </a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default MainLayoutComp;
