import axios from "axios";

export const API_KEY = "AIzaSyD6b66O8uHCyctRBODUgC3KEPxAjdd7tew";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl,
});

export const value_coverter = (value) => {
	if (value >= 1000000) {
		return Math.floor(value / 1000000) + "M";
	} else if (value >= 1000) {
		return Math.floor(value / 1000) + "K";
	} else {
		return value;
	}
};
