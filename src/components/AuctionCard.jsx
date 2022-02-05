import React from 'react';
import {Button} from 'react-bootstrap'
import {FaRegClock} from 'react-icons/fa'

const AuctionCard = ({name, bids, amount, img, time}) => {
  return (
		<div>
			<img alt={name} src={img} className="img-h" />
			<div className="px-3 pt-3">
				<span className="text-blue fw-700 fs-5">{name}</span>
				<div className="d-flex justify-content-between mt-2">
					<span className="text-secondary">N{amount}</span>
					<span>|</span>
					<div>
						<span className="text-secondary">
							<FaRegClock size={15} />
						</span>
						<span className="text-blue fw-700"> {time}</span>
					</div>
				</div>
				<Button variant="outline-primary"  className="px-4 my-3">
					BID NOW
				</Button>
				<p className="text-secondary">{bids} bids</p>
			</div>
		</div>
  );
};

export default AuctionCard;
