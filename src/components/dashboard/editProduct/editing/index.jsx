import {useLocation} from "react-router-dom";
import {useAxios} from "../../../../App";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const Editing = () => {
	let location = useLocation();
	let editingData = location.state;

	console.log(editingData);

	let defaultValues = {
		...editingData,
		price: editingData.price || editingData.discountedPrice || "",
		images: editingData.preview?.images?.[0] || "",
	};

	let {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm({
		defaultValues,
	});

	let [{loading, error}, refetch] = useAxios({}, {manual: true});

	let navigate = useNavigate();

	useEffect(() => {
		let isEntered = localStorage.getItem("isEntered");

		if (!isEntered) {
			navigate("/login");
		}
	}, [navigate]);

	const onSubmit = async (newData) => {
		let productData = {
			id: editingData.id,
			name: newData.name,
			price: parseFloat(newData.price),
			rating: parseFloat(newData.rating),
			category: newData.category,
			brand: newData.brand,
			modelName: newData.modelName,
			screenSize: newData.screenSize,
			hardDiskSize: newData.hardDiskSize,
			cpuModel: newData.cpuModel,
			ramMemory: newData.ramMemory,
			display: newData.display,
			graphics: newData.graphics,
			processor: newData.processor,
			inTheBox: newData.inTheBox,
			height: newData.height,
			width: newData.width,
			weight: newData.weight,
			releaseDate: newData.releaseDate,
			preview: {
				images: newData.images.split(","),
				video: newData.video,
			},
		};

		if (newData.comments === "") {
			delete productData.comments;
		} else {
			productData.comments = newData.comments ? newData.comments : [];
		}

		let endpoints = ["/newProducts", "/bestSellers", "/discountProducts"];

		for (let endpoint of endpoints) {
			try {
				await refetch({
					url: `${endpoint}/${editingData.id}`,
					method: "PUT",
					data: productData,
				});
				console.log(`Mahsulot muvaffaqiyatli yangilandi: ${endpoint}`);
				navigate("/dashboard/editProduct");
				return;
			} catch (err) {
				if (err.response && err.response.status === 404) {
					console.warn(`${endpoint} da mahsulot topilmadi.`);
				} else {
					console.error("Xato yuz berdi:", err);
					return;
				}
			}
		}

		console.error("Mahsulot hech bir bo'limda topilmadi.");
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="p-6 mx-auto space-y-4 bg-white rounded-md">
				<h2 className="mb-4 text-2xl font-semibold text-gray-800">
					Edit Product
				</h2>

				<div className="grid grid-cols-1 gap-4">
					{[
						{name: "name", label: "Name"},
						{name: "price", label: "Price"},
						{name: "category", label: "Category"},
					].map((value) => (
						<div key={value.name}>
							<label className="block text-sm font-medium text-gray-700">
								{value.label} <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								{...register(value.name, {
									required: `${value.label} is required`,
								})}
								className={`mt-1 block w-full px-4 py-2 border ${
									errors[value.name] ? "border-red-500" : "border-gray-300"
								} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200`}
							/>
							{errors[value.name] && (
								<span className="text-sm text-red-500">
									{errors[value.name].message}
								</span>
							)}
						</div>
					))}

					{[
						"brand",
						"modelName",
						"screenSize",
						"hardDiskSize",
						"cpuModel",
						"ramMemory",
						"display",
						"graphics",
						"processor",
						"inTheBox",
						"height",
						"width",
						"weight",
						"releaseDate",
						"comments",
						"images",
						"video",
					].map((value) => (
						<div key={value}>
							<label className="block text-sm font-medium text-gray-700">
								{value.charAt(0).toUpperCase() + value.slice(1)}
							</label>
							<input
								type="text"
								{...register(value)}
								className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
							/>
						</div>
					))}
				</div>

				<button
					type="submit"
					className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Editing;
