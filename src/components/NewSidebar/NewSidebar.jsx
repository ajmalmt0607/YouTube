import React from "react";
import "./NewSidebar.css";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";

const NewSidebar = () => {
	return (
		<div>
			<div className="newsidebar">
				<div className="category-links">
					<div className="category-link">
						<GoHomeFill className="icons" />
						<p>Home</p>
					</div>
					<div className="category-link">
						<SiYoutubeshorts className="icons" />
						<p>Shorts</p>
					</div>
					<div className="category-link">
						<MdOutlineSubscriptions className="icons" />
						<p>Subscriptions</p>
					</div>
					<div className="category-link">
						<MdVideoLibrary className="icons" />
						<p>You</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewSidebar;
