import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/Youtube-logo-1.png";
import search_icon from "../../assets/search.png";
import { RiVideoAddLine } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { CgBell } from "react-icons/cg";
import ProfilePic from "../../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import PopupMenu from "../PopupMenu/PopupMenu";

//////

const Navbar = ({ handleSearch, handleContainer }) => {
	const [searchTerm, setSearchTerm] = useState(""); //
	const [menuOpen, setMenuOpen] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const navigate = useNavigate();

	const handleToggleSidebar = () => {
		handleContainer(!sidebar);
		setSidebar(!sidebar);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		console.log(menuOpen);
	};
	// /////////////
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchTerm);
		// Redirect to search results page
		navigate("/search");
	};
	return (
		<>
			<nav className="flex-div">
				<div className="nav-left flex-div">
					<FiMenu
						className="menu-icon"
						onClick={handleToggleSidebar}
					/>
					<Link to={"/"} className="youtube-logo-1">
						<img src={logo} alt="Youtube logo" />
					</Link>
				</div>
				<div className="nav-middle">
					<form className="search-form" onSubmit={handleSubmit}>
						<div className="search-input">
							<input
								type="text"
								placeholder="Search"
								value={searchTerm}
								onChange={handleChange}
							/>
						</div>
						<div className="search-button">
							<button type="submit">
								<img src={search_icon} alt="Search" />
							</button>
						</div>
						<div className="voice-icon-container">
							<MdKeyboardVoice className="voice-icon" />
						</div>
					</form>
				</div>
				<div className="nav-right flex-div">
					<RiVideoAddLine className="video-add-icon" />
					<CgBell className="notification-icon" />
					<div onClick={toggleMenu} className="user-profile">
						<img src={ProfilePic} alt="user-profile" />
					</div>
				</div>
			</nav>
			<div className={`popup-menu ${menuOpen ? "open" : ""}`}>
				<PopupMenu />
			</div>
		</>
	);
};

export default Navbar;
