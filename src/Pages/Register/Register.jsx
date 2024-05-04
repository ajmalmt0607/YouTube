import React from "react";
import logo2 from "../../assets/Youtube-logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { customFetch } from "../../utils/data";

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post(
				"/auth/local/register",
				data
			);
			navigate("/login");
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"Please double check your credentials";
			console.log(errorMessage);
			return null;
		}
	};
	return (
		<div className="main-f">
			<div className="main-form">
				<form onSubmit={handleSubmit} method="post" className="form">
					<div className="youtube-logo">
						<img src={logo2} alt="" />
					</div>
					<input type="text" placeholder="username" name="username" />
					<input type="email" placeholder="email" name="email" />
					<input
						type="password"
						placeholder="password"
						name="password"
					/>
					<button type="submit">Register</button>
					<p>
						Already a Member?{" "}
						<Link to={"/login"} className="reg">
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
