import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayoutComp from "./components/layout";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";
import {makeUseAxios} from "axios-hooks";
import api from "./utils/useAxios/api";
import {FunctionProvider} from "./context/functionProvider";

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
		],
	},
]);

function App() {
	return (
		<FunctionProvider>
			<RouterProvider router={router} />;
		</FunctionProvider>
	);
}

export default App;
export {useAxios};
