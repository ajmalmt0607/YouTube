import React from "react";
import "./BigCategory.css";

const BigCategory = ({ category, setCategory }) => {
	return (
		<div className="flex-div category-buttons">
			<button
				className={`${category === 0 ? "active" : ""}`}
				onClick={() => {
					setCategory(0);
				}}
			>
				All
			</button>
			<button
				className={`${category === 25 ? "active" : ""}`}
				onClick={() => {
					setCategory(25);
				}}
			>
				News
			</button>
			<button
				className={`${category === 10 ? "active" : ""}`}
				onClick={() => {
					setCategory(10);
				}}
			>
				Music
			</button>
			<button
				className={`${category === 17 ? "active" : ""}`}
				onClick={() => {
					setCategory(17);
				}}
			>
				Sports
			</button>
			<button
				className={`${category === 20 ? "active" : ""}`}
				onClick={() => {
					setCategory(20);
				}}
			>
				Gaming
			</button>
			<button
				className={`${category === 28 ? "active" : ""}`}
				onClick={() => {
					setCategory(28);
				}}
			>
				Technology
			</button>
			<button
				className={`${category === 22 ? "active" : ""}`}
				onClick={() => {
					setCategory(22);
				}}
			>
				Blogs
			</button>
			<button
				className={`${category === 24 ? "active" : ""}`}
				onClick={() => {
					setCategory(24);
				}}
			>
				Entertainment
			</button>
			<button
				className={`${category === 2 ? "active" : ""}`}
				onClick={() => {
					setCategory(2);
				}}
			>
				Automobiles
			</button>
		</div>
	);
};

export default BigCategory;
