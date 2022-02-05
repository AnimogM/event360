import React from "react";
import { Button, Form } from "react-bootstrap";

import Image from "../images/ballon.png";
import Logo from "../images/logo360.svg";

const Signup = () => {
	return (
		<div className="d-flex">
			<div className="py-5 px-md-5 px-3 w-xs-100">
				<img src={Logo} alt="Event 360" />
				<h3 className="text-blue fw-700 py-4">Create an account</h3>
				<Form>
					<Form.Group className="d-flex gap-4 mb-3">
						<div className="w-50">
							<Form.Label className="text-muted">
								Vendor Name
							</Form.Label>
							<Form.Control type="text" />
						</div>
						<div className="w-50">
							<Form.Label className="text-muted">
								Vendor Type
							</Form.Label>
							<Form.Select className="form-control">
								<option></option>
								<option>Djs</option>
								<option>Photographer</option>
							</Form.Select>
						</div>
					</Form.Group>

					<Form.Group className="d-flex gap-4 mb-3">
						<div className="w-50">
							<Form.Label className="text-muted">City</Form.Label>
							<Form.Control type="text" />
						</div>
						<div className="w-50">
							<Form.Label className="text-muted">
								State
							</Form.Label>
							<Form.Control type="" />
						</div>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className="text-muted">Address</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-muted">Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-muted">Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-muted">
							Confirm Password
						</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group className="mb-5 text-primary">
						<Form.Check type="checkbox" label="Sign up as vendor" />
					</Form.Group>
					<Button variant="primary" type="submit" className="w-100">
						CREATE ACCOUNT
					</Button>
				</Form>
			</div>
			<div className="d-none d-lg-block w-50">
				<img src={Image} alt="EVENT 360" className="img-fluid" />
			</div>
		</div>
	);
};

export default Signup;
