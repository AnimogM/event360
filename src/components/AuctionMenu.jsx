import React from "react";
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
} from "react-bootstrap";
import {Link} from 'react-router-dom'

import Logo from "../images/logo360.svg";

const AuctionMenu = () => {
	return (
		<>
			<Navbar bg="white" expand="lg">
				<Container>
					<Link to="/" className="py-1">
						<img width={200} src={Logo} alt="Event 360" />
					</Link>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						className="justify-content-around pt-3 pt-lg-0"
						id="responsive-navbar-nav"
					>
						<Form className="d-flex w-400">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form>

						<Nav
							className="my-2 my-lg-0 align-items-center"
							style={{ maxHeight: "100px" }}
						>
							<Link className="text-primary" to="/creat-event">
								Create Event
							</Link>
							<Link to="/service">Services</Link>
							<Link to="/aution-house">Help Center</Link>
							<Link to="/login">Login</Link>
							<Link to="/signup">Signup</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default AuctionMenu;
