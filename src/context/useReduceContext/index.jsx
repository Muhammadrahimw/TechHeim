import {createContext, useReducer} from "react";
import {useReduceApp} from "../useReduceApp";

const initialState = {
	favorites: JSON.parse(localStorage.getItem("isLiked")) || [],
};

export let reduceContext = createContext();

export let ReduceProvider = ({children}) => {
	let [state, dispatch] = useReducer(useReduceApp, initialState);
	return (
		<reduceContext.Provider value={{state, dispatch}}>
			{children}
		</reduceContext.Provider>
	);
};
