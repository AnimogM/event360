import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
const MenuLayout = ({ children }) => {
	return (
		<>
			<NavMenu />
			{children}
			<Footer />
		</>
	);
};

export default MenuLayout;
