import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
import { useState } from "react";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
//actions

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	//function to handle search term changes
	const handleSearch = (term) => {
		setSearchTerm(term);
	};
	//function to handle container
	const handleContainer = (state) => {
		setMenuOpen(state);
	};
	const isLoginPage =
		location.pathname === "/login" || location.pathname === "/register";
	return (
		<div>
			{!isLoginPage && (
				<Navbar
					handleSearch={handleSearch}
					handleContainer={handleContainer}
				/>
			)}

			<Routes>
				<Route path="/" element={<Home menuOpen={menuOpen} />} />
				<Route
					path="/video/:categoryId/:videoId"
					element={<SingleVideo />}
				/>
				<Route
					path="/search"
					element={
						<SearchPage
							searchTerm={searchTerm}
							menuOpen={menuOpen}
						/>
					}
				/>
				<Route
					path="/search/:categoryId/:videoId"
					element={<SingleVideo />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
