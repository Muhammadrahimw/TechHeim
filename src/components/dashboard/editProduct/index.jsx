import {useAxios} from "../../../App";
import React, {useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaStar} from "react-icons/fa6";
import {FunctionContext} from "../../../context/functionContext.js";

function EditProduct() {
	let {CutText} = useContext(FunctionContext);

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

	let navigate = useNavigate();

	useEffect(() => {
		let isEntered = localStorage.getItem("isEntered");

		if (!isEntered) {
			navigate("/login");
		}
	}, [navigate]);
	return (
		<section className="grid grid-cols-4 gap-4 mt-8">
			{allData.map((value) => (
				<Link key={value.id} to="/dashboard/editProduct/editing" state={value}>
					<div className="w-full p-4 rounded shadow-md">
						<div
							style={{backgroundImage: `url(${value.preview?.images[0]})`}}
							className="max-w-[16em] h-[12em] bgStyle bg-cover max-[480px]:max-w-full"></div>
						<div className="my-4 border-t rounded-full border-gray"></div>
						<div className="h-[5.5em] flex flex-col justify-between items-start gap-2">
							<p className="font-light">
								<CutText text={value.name} maxLength={46} />
							</p>
							<div className="flex justify-between items-center gap-4 w-full text-[1.1em]">
								<p className="font-light">
									${value.price || value.originalPrice}
								</p>
								<p className="flex items-center gap-1 font-light">
									<FaStar className="scale-110 text-primary" />
									{value.rating}
								</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
}

export default EditProduct;
