import React from "react";
import {Link, Outlet} from "react-router-dom";

function LayoutDashboard() {
	return (
		<section className="bg-[#fafafb] p-5 w-screen h-screen flex justify-between items-start max-w-full gap-4">
			<div className="w-[20%] h-full custom-shadow rounded-lg bg-white p-4">
				<div className="flex items-center gap-4 mb-12">
					<div>
						<img src="/src/assets/images/logos/logo.svg" alt="logo" />
					</div>
					<Link to={"/"}>
						<h2 className="text-4xl">Tech Heim</h2>
					</Link>
				</div>
				<div className="flex flex-col items-start w-full gap-4">
					<Link to={"allProducts"}>
						<h2 className="flex items-center w-full h-12 text-3xl rounded-lg cursor-pointer nter">
							All Products
						</h2>
					</Link>
					<Link to={"addProduct"}>
						<h2 className="flex items-center w-full h-12 text-3xl rounded-lg cursor-pointer nter">
							Add Products
						</h2>
					</Link>
					<Link to={"deleteProduct"}>
						<h2 className="flex items-center w-full h-12 text-3xl rounded-lg cursor-pointer nter">
							Delete Products
						</h2>
					</Link>
					<Link to={"editProduct"}>
						<h2 className="flex items-center w-full h-12 text-3xl rounded-lg cursor-pointer nter">
							Edit Products
						</h2>
					</Link>
				</div>
			</div>
			<div className="w-[80%] min-h-full bg-white p-4 rounded-lg custom-shadow">
				<h1 className="text-4xl">Dashboard</h1>
				<Outlet />
			</div>
		</section>
	);
}

export default LayoutDashboard;
