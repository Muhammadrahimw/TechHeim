import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayoutComp from "./components/layout";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";

let router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayoutComp />,
		children: [
			{index: true, element: <HomePage />},
			{path: "basket", element: <BasketPage />},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
