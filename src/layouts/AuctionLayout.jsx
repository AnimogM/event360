import React from "react";
import AuctionMenu from "../components/AuctionMenu";
import Footer from "../components/Footer";
const AuctionLayout = ({ children }) => {
	return (
		<>
			<AuctionMenu />
			{children}
			<Footer />
		</>
	);
};

export default AuctionLayout;
