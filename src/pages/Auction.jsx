import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import AuctionLayout from "../layouts/AuctionLayout";
import HelpMenu from "../components/HelpMenu";
import Left from "../images/pngwing 1.png";
import auctionData from "../data/auction-data";
import AuctionCard from "../components/AuctionCard";

const Auction = () => {
	return (
		<AuctionLayout>
			<HelpMenu />
			<section className="a-page bg-navy-grad">
				<Row className="gx-0 align-items-center">
					<Col md={6} className="text-white px-2 px-lg-5 pt-2">
						<div className="px-lg-4 pt-4">
							<h1 className="">100% Online Auctions</h1>
							<p className="py-2 fs-4">
								Featuring Paintings,Artpiece, Woodwork, <br />{" "}
								Designs and lot more...
							</p>
							<div className="d-flex flex-wrap gap-y-4 justify-content-between my-4 align-items-center fs-5 fw-700">
								<div>
									<span className="bg-navy rounded-circle px-2 py-1 px-md-4 py-md-3">
										1
									</span>
									<span className="ms-3">Register</span>
								</div>
								<div>
									<span className="bg-navy rounded-circle px-2 py-1 px-md-4 py-md-3">
										2
									</span>
									<span className="ms-3">Find</span>
								</div>
								<div>
									<span className="bg-navy rounded-circle px-2 py-1 px-md-4 py-md-3">
										3
									</span>
									<span className="ms-3">Bid</span>
								</div>
							</div>
							<Button className="fs-4 border-0 bg-navy px-5 py-2 mt-5">
								Register to Start Bidding
							</Button>
						</div>
					</Col>
					<Col md={6} className="d-none d-md-block">
						<img src={Left} className="img-fluid" alt="event 360" />
					</Col>
				</Row>
			</section>
			<section className="py-5">
				<Container>
					<Row>
						{auctionData.map((items) => {
							return (
								<Col key={items.id} md={4} className="g-5">
									<AuctionCard {...items} />
								</Col>
							);
						})}
					</Row>
					<div className="text-center mt-2">
						<Button className="bg-navy border-0 px-5">
							View More
						</Button>
					</div>
				</Container>
			</section>
		</AuctionLayout>
	);
};

export default Auction;
