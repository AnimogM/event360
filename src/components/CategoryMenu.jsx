import React from "react";
import { Link } from "react-router-dom";

import categories from "../data/categories";

const CategoryMenu = () => {
	const menu = categories.slice(0, 6)
	
	return (
		<div className="bg-grey text-blue d-none d-md-block py-2 fw-700 px-4">
			<div className="d-flex gap-4 flex-wrap">
				{menu.map((item, index) => {
					let id = item.category.replace(/\s+/g, "-").toLowerCase();
					return (
						<Link key={index} to={`/all-categories/${id}`} className="text-blue">
							{item.category}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryMenu;
