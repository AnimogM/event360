import React, { useState, useEffect, useContext, createContext } from "react";

import categories from "../data/categories";

const ContextApi = createContext();

const Context = ({ children }) => {
	const [vendors, setVendors] = useState([]);

	useEffect(() => {
		const liste = categories.map((cat) => cat.items);
		setVendors(liste);
	}, []);
    
	return (
		<ContextApi.Provider value={{ categories, vendors }}>
			{children}
		</ContextApi.Provider>
	);
};

export default Context;

export const useGlobal = () => {
	return useContext(ContextApi);
};
