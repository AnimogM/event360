import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	FaLinkedin,
	FaFacebook,
	FaTwitterSquare,
	FaInstagram,
} from "react-icons/fa";

import Logo from "../images/event360 1.png";

const Footer = () => {
	return (
		<div className="bg-primary py-4 text-white">
			<Container>
				<Row className="px-2 px-md-5 px-lg-0 justify-content-between align-items-baseline">
					<Col lg={3} md={6}>
						<div>
							<img src={Logo} alt="event 360" />
						</div>
						<div className="d-flex gap-3 my-3">
							<FaTwitterSquare />
							<FaFacebook />
							<FaInstagram />
							<FaLinkedin />
						</div>
						<p className="fw-700">&copy; 2021 Event360</p>
					</Col>
					<Col lg={3} md={6}>
						<h4 className="pt-2">Company</h4>
						<ul>
							<li className="mt-3">About Us</li>
							<li className="mt-3">Pricing</li>
							<li className="mt-3">FAQS</li>
							<li className="mt-3">Testimonials</li>
						</ul>
					</Col>
					<Col lg={3} md={6} className="d-none d-md-block">
						<h4 className="pt-2">Plan Event</h4>
						<ul>
							<li className="mt-3">Wedding</li>
							<li className="mt-3">Birthday</li>
							<li className="mt-3">Funeral</li>
							<li className="mt-3">Sports Event</li>
							<li className="mt-3">Exhibition</li>
						</ul>
					</Col>
					<Col lg={3} md={6}>
						<h4 className="pt-2">Contact Support</h4>
						<ul>
							<li className="mt-3">Help Center</li>
							<li className="mt-3">Privacy</li>
							<li className="mt-3">Terms and Condition</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
