import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sortcut-links">
				<div className="side-link">
					<GoHomeFill className="icons" />
					<p>Home</p>
				</div>
				<div className="side-link">
					<SiYoutubeshorts className="icons" />
					<p>Shorts</p>
				</div>
				<div className="side-link">
					<MdOutlineSubscriptions className="icons" />
					<p>Subscriptions</p>
				</div>
				<div className="side-link">
					<MdVideoLibrary className="icons" />
					<p>You</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
