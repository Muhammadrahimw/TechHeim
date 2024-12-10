import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayoutComp from "./components/layout";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";
import {makeUseAxios} from "axios-hooks";
import api from "./utils/useAxios/api";
import {FunctionProvider} from "./context/functionProvider";
import ProductPage from "./pages/products";
import TechInfoComp from "./components/technicinfo";
import CommentComp from "./components/comment";
import Favorites from "./pages/favorites";
import {ReduceProvider} from "./context/useReduceContext";
import LayoutDashboard from "./components/dashboard/layout";
import Dashboard from "./pages/dashboard";
import AllProductsComp from "./components/dashboard/allProducts";

let useAxios = makeUseAxios({
	axios: api,
});

let router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayoutComp />,
		children: [
			{index: true, element: <HomePage />},
			{path: "basket", element: <BasketPage />},
			{path: "favorites", element: <Favorites />},
			{
				path: "product/:id",
				element: <ProductPage />,
				children: [
					{path: "technical", element: <TechInfoComp />},
					{path: "comments", element: <CommentComp />},
				],
			},
		],
	},
	{
		path: "/dashboard",
		element: <LayoutDashboard />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{path: "allProducts", element: <AllProductsComp />},
		],
	},
]);

function App() {
	return (
		<ReduceProvider>
			<FunctionProvider>
				<RouterProvider router={router} />
			</FunctionProvider>
		</ReduceProvider>
	);
}

export default App;
export {useAxios};
