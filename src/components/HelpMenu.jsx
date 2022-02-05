import React from "react";
import { Link } from "react-router-dom";


const HelpMenu = () => {
	const menu = ["how it works", 'browse auctions', 'add bids'];

	return (
		<div className="bg-navy py-2 fw-600 px-md-5 px-2">
			<div className="d-flex gap-4 flex-wrap">
				{menu.map((item, index) => {
					return (
						<Link
							key={index}
							to={`/auction-house/${item.replace(/\s+/g, "-")}`}
							className="text-white text-capitalize"
						>
							{item}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default HelpMenu;
