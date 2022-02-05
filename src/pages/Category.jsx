import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import MenuLayout from "../layouts/MenuLayout";
import CategoryMenu from "../components/CategoryMenu";
import categories from "../data/categories";
import CardShadow from "../components/CardShadow";

const Category = () => {
	const [list, setList] = useState([]);
	const { id } = useParams();
	const category = id.replace(/\W+/g, " ");
	useEffect(() => {
		let new_cat = categories.filter(
			(cat) => cat.category.toLowerCase() === category
		).map(cat => cat.items);
		setList(new_cat[0]);
	}, [category]);
	return (
		<MenuLayout>
			<CategoryMenu />
			<section className="bg-light py-5">
				<Container className="py-4">
					<h3 className="text-blue text-capitalize">{category}</h3>
					<Row className="pt-3 gy-3">
						{list.map((ele, index) => {
							// let id = ele.category
							// 	.replace(/\s+/g, "-")
							// 	.toLowerCase();
							return (
								<Col md={4} lg={3} key={index}>
									<Link to={`/vendor`}>
										<CardShadow
											name={ele.name}
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

export default Category;
