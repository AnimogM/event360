import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Image from "../images/ballon.png";
import Logo from "../images/logo360.svg";

const Login = () => {
	return (
		<div className="d-flex">
			<div className="py-5 px-md-5 px-3 w-xs-100 text-center">
				<img src={Logo} alt="Event 360" />
				<h3 className="text-blue fw-700 py-4">Welcome Back</h3>
				<Form className="px-md-5">
					<Form.Group className="mb-3 text-start">
						<Form.Label className="text-muted">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group className="mb-3 text-start">
						<Form.Label className="text-muted">Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<div className="d-flex justify-content-between text-primary">
						<Form.Group className="mb-5">
							<Form.Check type="checkbox" label="Remember me" />
						</Form.Group>
						<Link to="/">Forgot password?</Link>
					</div>
					<Button variant="primary" type="submit" className="w-100">
						Sign in
					</Button>
				</Form>
				<p className="mt-3">
					Dont have an account?{" "}
					<Link to="/signup" className="text-primary fw-700">
						Sign Up
					</Link>
				</p>
			</div>
			<div className="d-none d-lg-block w-50">
				<img src={Image} alt="EVENT 360" className="img-fluid" />
			</div>
		</div>
	);
};

export default Login;
