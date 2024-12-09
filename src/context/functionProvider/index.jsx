import {FunctionContext} from "../functionContext.js/index.js";
import * as utils from "../../utils/allFunctions/index.js";

export let FunctionProvider = ({children}) => {
	return (
		<FunctionContext.Provider value={utils}>
			{children}
		</FunctionContext.Provider>
	);
};
