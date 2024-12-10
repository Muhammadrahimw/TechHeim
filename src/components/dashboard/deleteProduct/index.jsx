import {useAxios} from "../../../App";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa6";
import {FunctionContext} from "../../../context/functionContext.js";

function DeleteProductComp() {
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

	let deleteFunc = async (id) => {
		let [{loading, error}] = useAxios({
			url: `/newProducts/${id}`,
			method: "DELETE",
		});
	};

	return (
		<section className="grid grid-cols-4 gap-4">
			{allData.map((value) => (
				<div className="w-full p-4 rounded shadow-md">
					<Link key={value.id} to={`/product/${value.id}/technical`}>
						<div
							style={{backgroundImage: `url(${value.preview?.images[0]})`}}
							className="max-w-[16em] h-[12em] bgStyle bg-cover max-[480px]:max-w-full"></div>
						<div className="my-4 border-t rounded-full border-gray"></div>
					</Link>
					<div className="min-h-[5.5em] flex flex-col justify-between items-start gap-2">
						<p className="font-light">
							<CutText text={value.name} maxLength={46} />
						</p>
						<button
							onClick={() => deleteFunc(value.id)}
							className="w-full h-8 text-white bg-red-500 rounded">
							delete
						</button>
					</div>
				</div>
			))}
		</section>
	);
}

export default DeleteProductComp;
