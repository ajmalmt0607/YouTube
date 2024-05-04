import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import NewSidebar from "../../components/NewSidebar/NewSidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import BigCategory from "../../components/BigCategory/BigCategory";

const Home = ({ menuOpen }) => {
	const [category, setCategory] = useState(0);
	// const showContainer = useSelector((state) => state.showNewSidebar);
	return (
		<>
			<SidebarContent menuOpen={menuOpen} />
			<div className={`${menuOpen ? "container" : "large-container"}`}>
				<BigCategory category={category} setCategory={setCategory} />
				<VideoCard category={category} />
			</div>
		</>
	);
};

function SidebarContent({ menuOpen }) {
	// const showNewSidebar = useSelector((state) => state.showNewSidebar);

	return menuOpen ? <NewSidebar /> : <Sidebar />;
}
export default Home;
