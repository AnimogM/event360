import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";

import Tick from "../images/TICK.svg";
import About from "../images/about-us.png";

import MenuLayout from "../layouts/MenuLayout";
import Space from "../components/Space";
import CardItem from "../components/CardItem";

const options = ["Honest pricing", "Unique spaces", "Smart bookings"];

const Home = () => {
	return (
		<MenuLayout>
			<section className="hero text-white">
				<Container className="pt-5">
					<h1 className="display-5 fw-bolder py-3">
						Plan with a Click.
					</h1>
					<h4 className="fs-3 fw-800">Your journey starts here.</h4>
					<div className="my-3">
						{options.map((option, index) => {
							return (
								<div
									key={index}
									className="d-flex align-items-center "
								>
									<img src={Tick} alt={option} width={20} />
									<p className="fw-700 ps-2 pt-2">{option}</p>
								</div>
							);
						})}
						<Button className="mt-5">
							Plan events
							<BsArrowRightShort size={30} className="ps-2" />
						</Button>
					</div>
				</Container>
			</section>
			<section className="py-5">
				<Container>
					<h4 className="fw-700 py-1">
						Book a unique space for your event.
					</h4>
					<Space />
					<Button className="bg-light border-0 text-secondary">
						Browse all spaces <BsArrowRightShort size={25} />
					</Button>
				</Container>
			</section>
			<section className="py-2 py-lg-5">
				<Container fluid>
					<div className="row align-items-center">
						<div className="d-none d-lg-block col-lg-6 ps-0">
							<img
								className="img-fluid"
								src={About}
								alt="about us"
							/>
						</div>
						<div className="col-lg-6 text-center">
							<h1 className="fw-700 pb-4 mb-3">About us</h1>
							<p className="fw-700 text-blue px-lg-5">
								Event360.ng is a web app that allows users to
								book or plan any event by contacting vendors
								available on the web app. The web app contains
								vendors from all spheres, from entertainment, to
								cuisines, to event centres e.t.c.
							</p>
							<p className="fw-700 text-blue pt-3 px-lg-5">
								It also serves as an auction site, where users
								can auction off their works. It is open to a
								variety of individuals from Painters, to fashion
								designers, to graphic artists, sculptors e.t.c.
							</p>
						</div>
					</div>
				</Container>
			</section>
			<section className="py-5 bg-light">
				<Container>
					<h4 className="fw-700 py-1">
						Choose from a variety of artists.
					</h4>
					<div className="d-flex gap-4 my-4 flex-wrap">
						<CardItem name={"Nathaniel Tetteh"} />
						<CardItem name={"Sam Kiefte"} />
						<CardItem name={"Dave Mock"} />
					</div>
					<Button className="bg-white border-0 text-secondary">
						See all artists <BsArrowRightShort size={25} />
					</Button>
				</Container>
			</section>
			<section className="py-5">
				<Container>
					<h4 className="fw-700 py-1">
						Get a taste of diversity with the right cuisine.
					</h4>
					<div className="d-flex gap-4 my-4 flex-wrap">
						<CardItem bg={"w"} name={"Mary John"} />
						<CardItem bg={"w"} name={"Mama Emma"} />
						<CardItem bg={"w"} name={"Toa Heftiba"} />
					</div>
					<Button className="bg-light border-0 text-secondary">
						See all chefs <BsArrowRightShort size={25} />
					</Button>
				</Container>
			</section>
			<section className="py-5 bg-light">
				<Container>
					<h4 className="fw-700 py-1">
						You might also be interested in...
					</h4>
					<div className="d-flex gap-4 my-4 flex-wrap">
						<CardItem name={"Cleaning Service"} />
						<CardItem name={"MCs"} />
						<CardItem name={"Photographers."} />
					</div>
					<Button className="bg-white border-0 text-secondary">
						Browse all vendors <BsArrowRightShort size={25} />
					</Button>
				</Container>
			</section>
		</MenuLayout>
	);
};

export default Home;
