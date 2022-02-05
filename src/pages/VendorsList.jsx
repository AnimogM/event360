import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import MenuLayout from "../layouts/MenuLayout";
import CategoryMenu from "../components/CategoryMenu";
import CardShadow from "../components/CardShadow";
import { useGlobal } from "../context/Context";

const VendorsList = () => {
	const {vendors} = useGlobal()
	return (
		<MenuLayout>
			<CategoryMenu />
			<section className="bg-light py-5">
				<Container className="py-4">
					<h3 className="text-blue text-capitalize">All Vendors</h3>
					<Row className="pt-3 gy-3">
						{vendors.map((ele) => {
							return ele.map((item, index) => {
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

export default VendorsList;
