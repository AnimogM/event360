import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import MenuLayout from "../layouts/MenuLayout";
import CategoryMenu from "../components/CategoryMenu";
import CardShadow from "../components/CardShadow";
import { useGlobal } from "../context/Context";

const Service = () => {
	const { categories, vendors } = useGlobal();
	return (
		<MenuLayout>
			<CategoryMenu />
			<section className="">
				<div className="d-flex align-items-center text-danger text-center flex-column bg-event2 bg-event justify-content-center">
					<h1 className="fw-bold display-4 ">
						Pick the Right Vendors
					</h1>
					<h1 className="fw-bold display-4 ">for Your Events</h1>
				</div>
				<div className="py-4 text-center text-blue">
					<h1 className="pb-1">
						Get The Best Services for your Events
					</h1>
					<p className="fw-700">
						Find the best Vendors you need to help you have the best
						events
					</p>
				</div>
			</section>
			<section className="bg-light py-5">
				<Container className="bg-white shadow-sm px-md-3 py-4">
					<div className="d-flex justify-content-between align-items-center">
						<h4 className="text-blue">Top Categories</h4>
						<Link to="/all-categories">
							<Button className="px-4">View all</Button>
						</Link>
					</div>
					<Row className="pt-3 gy-3">
						{categories.slice(0, 8).map((ele, index) => {
							let id = ele.category
								.replace(/\s+/g, "-")
								.toLowerCase();
							return (
								<Col md={4} lg={3} key={index}>
									<Link to={`/all-categories/${id}`}>
										<CardShadow
											name={ele.category}
											img={ele.img}
										/>
									</Link>
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>
			<section className="bg-light pb-5">
				<Container className="bg-white shadow-sm px-md-3 py-4">
					<div className="d-flex justify-content-between align-items-center">
						<h4 className="text-blue">Top Vendors</h4>
						<Link to="/all-vendors">
							<Button className="px-4">View all</Button>
						</Link>
					</div>
					<Row className="pt-3 gy-3">
						{vendors.map((ele) => {
							return ele.slice(2, 3).map((item, index) => {
								return (
									<Col md={4} lg={3} key={index}>
										<Link to={`/vendor`}>
											<CardShadow
												name={item.name}
												img={item.img}
											/>
										</Link>
									</Col>
								);
							});
						})}
					</Row>
				</Container>
			</section>
		</MenuLayout>
	);
};

export default Service;
