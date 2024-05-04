import React, { useState } from "react";
import "./PopupMenu.css";
import UserPic from "../../assets/user_profile.jpg";
import { IoLogoGoogle } from "react-icons/io5";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";

const PopupMenu = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userState.user);

	const handleLogout = () => {
		navigate("/");
		dispatch(logoutUser());
	};
	return (
		<div className="menu-content">
			{/* Your menu items go here */}
			{user ? (
				<div className="flex-div menu-top">
					<div className="user-icon">
						<img src={UserPic} alt="user-icon" />
					</div>

					<span>{user.username}</span>
				</div>
			) : (
				""
			)}

			<div className="menu-link">
				<IoLogoGoogle className="link-icon" />
				<a className="" href="#">
					<span>Google Account</span>
				</a>
			</div>
			<div className="menu-link">
				<MdOutlineSwitchAccount className="link-icon" />
				<a className="" href="#">
					<span>Switch Account</span>
				</a>
			</div>
			{user ? (
				<div className="menu-link">
					<PiSignOut className="link-icon" />
					<Link to={"/"} onClick={handleLogout} className="" href="#">
						<span>Sign out</span>
					</Link>
				</div>
			) : (
				<div className="menu-link">
					<PiSignIn className="link-icon" />
					<Link to={"/login"} className="" href="#">
						<span>Sign in</span>
					</Link>
				</div>
			)}
		</div>
	);
};

export default PopupMenu;
