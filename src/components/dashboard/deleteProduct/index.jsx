import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FunctionContext} from "../../../context/functionContext.js";
import {useContext} from "react";

function DeleteProductComp() {
	let {CutText} = useContext(FunctionContext);

	let [allProducts, setAllProducts] = useState([]);
	let [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		try {
			const discountResponse = await axios.get(
				"http://localhost:3000/discountProducts"
			);
			const newResponse = await axios.get("http://localhost:3000/newProducts");
			const bestResponse = await axios.get("http://localhost:3000/bestSellers");

			setAllProducts([
				...discountResponse.data,
				...newResponse.data,
				...bestResponse.data,
			]);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching products:", error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const deleteFunc = async (id) => {
		try {
			const endpoints = [
				`http://localhost:3000/discountProducts/${id}`,
				`http://localhost:3000/newProducts/${id}`,
				`http://localhost:3000/bestSellers/${id}`,
			];

			for (const endpoint of endpoints) {
				try {
					await axios.delete(endpoint);
					console.log(`Product deleted from: ${endpoint}`);
				} catch (error) {
					console.warn(`Could not delete from: ${endpoint}`);
				}
			}

			setAllProducts((prevProducts) =>
				prevProducts.filter((product) => product.id !== id)
			);
		} catch (error) {
			console.error("Error deleting product:", error.message);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<section className="grid grid-cols-4 gap-4">
			{allProducts.map((value) => (
				<div key={value.id} className="w-full p-4 rounded shadow-md">
					<Link to={`/product/${value.id}/technical`}>
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
							Delete
						</button>
					</div>
				</div>
			))}
		</section>
	);
}

export default DeleteProductComp;
