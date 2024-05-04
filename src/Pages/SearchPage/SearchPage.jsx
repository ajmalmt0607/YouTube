import Sidebar from "../../components/Sidebar/Sidebar";
import NewSidebar from "../../components/NewSidebar/NewSidebar";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchPage = ({ searchTerm, menuOpen }) => {
	return (
		<>
			<SidebarContent menuOpen={menuOpen} />
			<div className={`${menuOpen ? "container" : "large-container"}`}>
				<SearchResult searchTerm={searchTerm} />
			</div>
		</>
	);
};

function SidebarContent({ menuOpen }) {
	return menuOpen ? <NewSidebar /> : <Sidebar />;
}
export default SearchPage;
