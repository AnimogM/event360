import React from "react";
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

import MenuLayout from "../layouts/MenuLayout";
import CategoryMenu from "../components/CategoryMenu";
import CardShadow from "../components/CardShadow";
import { useGlobal } from "../context/Context";

const Categories = () => {
	const {categories} = useGlobal()
	return (
		<MenuLayout>
			<CategoryMenu />
			<section className="">
				<div className="d-flex align-items-center text-center flex-column bg-event bg-event1 justify-content-center">
					<h1 className="fw-bold display-4 text-white">
						Pick the Right Vendors
					</h1>
					<h1 className="fw-bold display-4 text-white">
						for Your Events
					</h1>
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
				<Container className="bg-white px-md-3 py-4">
					<h3 className="text-blue">All Categories</h3>
					<Row className="pt-3 gy-3">
						{categories.map((ele, index) => {
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
		</MenuLayout>
	);
};

export default Categories;
