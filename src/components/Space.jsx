import React from 'react'

import Space1 from "../images/space-1.png";
import Space2 from "../images/space-2.png";
import Space3 from "../images/space-3.png";
import Space4 from "../images/space-4.png";
import Space5 from "../images/space-5.png";

const Space =()=>{
    return (
		<>
			<div className="row px-0 mt-4">
				<div className="col-xl-8">
					<div className="row px-0">
						<div className="col-md-6">
							<img className="w-300" src={Space1} alt="space" />
							<p className="mw-435 text-blue bg-light p-2 py-3 mb-4 fw-700">
								Unforgettable Weddings with the right space.
							</p>
						</div>
						<div className="col-md-6">
							<img className="w-300" src={Space2} alt="space" />
							<p className="mw-435 text-blue bg-light p-2 py-3 mb-4 fw-700">
								Unforgettable Birthdays with the right space.
							</p>
						</div>
						<div className="col-md-6">
							<img className="w-300" src={Space3} alt="space" />
							<p className="mw-435 text-blue bg-light p-2 py-3 mb-4 fw-700">
								Bury the dead with the right space for a
								funeral.
							</p>
						</div>
						<div className="col-md-6">
							<img className="w-300" src={Space4} alt="space" />
							<p className="mw-435 text-blue bg-light p-2 py-3 mb-4 fw-700">
								Show of your Exhibition with the right space
								now.
							</p>
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					<img className="w-300 " src={Space5} alt="space" />
					<p className="mw-435 text-blue bg-light p-2 py-3 mb-4 fw-700">
						Play sports the right way it the right space now.
					</p>
				</div>
			</div>
		</>
	);
}
export default Space 
