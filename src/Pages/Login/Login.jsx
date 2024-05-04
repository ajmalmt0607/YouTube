// import React from "react";
// import logo from "../../assets/Youtube-logo-1.png";
// import { Link, redirect } from "react-router-dom";
// import "./Login.css";
// import { customFetch } from "../../data";
// import { loginUser } from "../../features/user/userSlice";

// export const action =
// 	(store) =>
// 	async ({ request }) => {
// 		const formData = await request.formData();
// 		const data = Object.fromEntries(formData);
// 		console.log(data);

// 		try {
// 			const response = await customFetch.post("/auth/local", data);
// 			store.dispatch(loginUser(response.data));
// 			return redirect("/");
// 		} catch (error) {
// 			const errorMessage =
// 				error?.response?.data?.error?.message ||
// 				"please double check your credentials";
// 			console.log(errorMessage);
// 			return null;
// 		}
// 	};

// const Login = () => {
// 	return (
// 		<div className="main-f">
// 			<div className="main-form">
// 				<form method="post" className="form">
// 					<div className="youtube-logo">
// 						<img src={logo} alt="" />
// 					</div>

// 					<input type="email" placeholder="email" name="identifier" />
// 					<input
// 						type="password"
// 						placeholder="password"
// 						name="password"
// 					/>
// 					<button>login</button>
// 					<p>
// 						Not a member yet?{" "}
// 						<Link to={"/register"} className="reg">
// 							register
// 						</Link>
// 					</p>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/Youtube-logo-1.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { customFetch } from "../../utils/data";
import { loginUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post("/auth/local", data);
			dispatch(loginUser(response.data));
			navigate("/");
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"Please double check your credentials";
			setError(errorMessage);
		}
	};

	return (
		<div className="main-f">
			<div className="main-form">
				<form onSubmit={handleSubmit} className="form">
					<div className="youtube-logo">
						<img src={logo2} alt="" />
					</div>

					<input type="email" placeholder="Email" name="identifier" />
					<input
						type="password"
						placeholder="Password"
						name="password"
					/>
					<button type="submit">Login</button>
					{error && <p className="error-message">{error}</p>}
					<p>
						Not a member yet?{" "}
						<Link to={"/register"} className="reg">
							Register
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
