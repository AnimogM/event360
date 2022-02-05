import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import Artist from "../images/Artist1.png";

const CardItem = ({bg, name}) => {
    let color = '';
    if(bg){
        color = 'light'
    }else{
        color = 'white'
    }
	return (
		<div className="w-400">
			<img className="img-fluid" src={Artist} alt="Nathaniel Tetteh" />
			<div
				className={`d-flex p-2 text-blue justify-content-between align-items-center bg-${color}`}
			>
				<p className="fw-700">{name ? name : "Nathaniel Tetteh"}</p>
				<BsArrowRightShort size={25} />
			</div>
		</div>
	);
};

export default CardItem;
