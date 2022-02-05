import React from "react";

const CardShadow = ({ img, name }) => {
	return (
		<div className="shadow-sm">
			<img src={img} alt={name} className="img-h" />
			<p className="text-blue py-3 fw-700 px-3">{name}</p>
		</div>
	);
};

export default CardShadow;
