import React, {useEffect} from "react";
import AllProductsComp from "../../components/dashboard/allProducts";
import {useNavigate} from "react-router-dom";

function Dashboard() {
	let navigate = useNavigate();

	useEffect(() => {
		let isEntered = localStorage.getItem("isEntered");

		if (!isEntered) {
			navigate("/login");
		}
	}, [navigate]);

	return (
		<section>
			<AllProductsComp />
		</section>
	);
}

export default Dashboard;
