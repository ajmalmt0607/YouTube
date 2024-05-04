// import React, { useEffect, useState } from "react";
// import { API_KEY, value_coverter } from "../../data";
// import "./SearchResult.css";
// import { Link } from "react-router-dom";
// import moment from "moment";

// function SearchResult({ searchTerm }) {
// 	const [videos, setVideos] = useState([]);

// 	useEffect(() => {
// 		const fetchVideos = async () => {
// 			try {
// 				const response = await fetch(
// 					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchTerm}&maxResults=25
// 					`
// 				);

// 				if (!response.ok) {
// 					throw new Error("Failed to fetch videos");
// 				}

// 				const data = await response.json();
// 				setVideos(data.items);
// 			} catch (error) {
// 				console.error("Error fetching videos:", error);
// 			}
// 		};

// 		if (searchTerm !== "") {
// 			fetchVideos();
// 		}
// 	}, [searchTerm]);
// 	return (
// 		<div>
// 			{videos.map((item, index) => (
// 				<VideoItems key={index} item={item} />
// 			))}
// 		</div>
// 	);
// }

// const VideoItems = ({ item }) => {
// 	const [channelData, setChannelData] = useState(null);

// 	useEffect(() => {
// 		const fetchChannelData = async () => {
// 			try {
// 				const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`;
// 				const response = await fetch(channelDataUrl);
// 				const data = await response.json();
// 				setChannelData(data.items[0]);
// 			} catch (error) {
// 				console.error("Error fetching channel data:", error);
// 			}
// 		};

// 		fetchChannelData();
// 	}, [item.snippet.channelId]);
// 	return (
// 		<Link
// 			to={`video/${item.snippet.categoryId}/${item.id.videoId}`}
// 			className="card"
// 		>
// 			<div className="main" key={item.id.videoId}>
// 				<div className="image-box">
// 					<img
// 						src={item.snippet.thumbnails.medium.url}
// 						alt={item.snippet.title}
// 					/>
// 				</div>
// 				<div className="content-box">
// 					<h2>{item.snippet.title}</h2>
// 					{/* <p className="video-count">
// 						{value_coverter(item.statistics.viewCount)} views &bull;{" "}
// 						{moment(item.snippet.publishedAt).fromNow()}
// 					</p> */}

// 					<div className="channel-details">
// 						{channelData && (
// 							<img
// 								src={channelData.snippet.thumbnails.default.url}
// 								alt={channelData.snippet.title}
// 							/>
// 						)}
// 						<h3>{item.snippet.channelTitle}</h3>
// 					</div>
// 					<p className="description">
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 						Voluptatum ipsam laboriosam ea placeat illo impedit.
// 					</p>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// };

// export default SearchResult;

// import React, { useEffect, useState } from "react";
// import { API_KEY, value_coverter } from "../../data";
// import "./SearchResult.css";
// import { Link } from "react-router-dom";
// import moment from "moment";

// function SearchResult({ searchTerm }) {
// 	const [videos, setVideos] = useState([]);

// 	useEffect(() => {
// 		const fetchVideos = async () => {
// 			try {
// 				const response = await fetch(
// 					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchTerm}&maxResults=25`
// 				);

// 				if (!response.ok) {
// 					throw new Error("Failed to fetch videos");
// 				}

// 				const data = await response.json();
// 				setVideos(data.items);
// 			} catch (error) {
// 				console.error("Error fetching videos:", error);
// 			}
// 		};

// 		if (searchTerm !== "") {
// 			fetchVideos();
// 		}
// 	}, [searchTerm]);

// 	return (
// 		<div>
// 			{videos.map((item, index) => (
// 				<VideoItems key={index} item={item} />
// 			))}
// 		</div>
// 	);
// }

// const VideoItems = ({ item }) => {
// 	const [channelData, setChannelData] = useState(null);
// 	const [viewCount, setViewCount] = useState(null); // Add state for view count

// 	useEffect(() => {
// 		const fetchChannelData = async () => {
// 			try {
// 				const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`;
// 				const response = await fetch(channelDataUrl);
// 				const data = await response.json();
// 				setChannelData(data.items[0]);
// 			} catch (error) {
// 				console.error("Error fetching channel data:", error);
// 			}
// 		};

// 		fetchChannelData();
// 	}, [item.snippet.channelId]);

// 	// Fetch detailed statistics (including view count)
// 	useEffect(() => {
// 		const fetchVideoStatistics = async () => {
// 			if (item.id && item.id.videoId) {
// 				// Check for video ID
// 				try {
// 					const statisticsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${item.id.videoId}&key=${API_KEY}`;
// 					const response = await fetch(statisticsUrl);
// 					const data = await response.json();
// 					setViewCount(data.items[0].statistics.viewCount);
// 				} catch (error) {
// 					console.error("Error fetching video statistics:", error);
// 				}
// 			}
// 		};

// 		fetchVideoStatistics();
// 	}, [item.id]); // Dependency on item.id to trigger on video change

// 	return (
// 		<Link to={`/search/${item.id.videoId}`} className="card">
// 			<div className="main" key={item.id.videoId}>
// 				<div className="image-box">
// 					<img
// 						src={item.snippet.thumbnails.medium.url}
// 						alt={item.snippet.title}
// 					/>
// 				</div>
// 				<div className="content-box">
// 					<h2>{item.snippet.title}</h2>
// 					<p className="video-count">
// 						{viewCount
// 							? value_coverter(viewCount)
// 							: "Loading views..."}{" "}
// 						views &bull;{" "}
// 						{moment(item.snippet.publishedAt).fromNow()}
// 					</p>
// 					<div className="channel-details">
// 						{channelData && (
// 							<img
// 								src={channelData.snippet.thumbnails.default.url}
// 								alt={channelData.snippet.title}
// 							/>
// 						)}
// 						<h3>{item.snippet.channelTitle}</h3>
// 					</div>
// 					<p className="description">
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 						Voluptatum ipsam laboriosam ea placeat illo impedit.
// 					</p>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// };

// export default SearchResult;
import React, { useEffect, useState } from "react";
import { API_KEY, value_coverter } from "../../utils/data";
import "./SearchResult.css";
import { Link } from "react-router-dom";
import moment from "moment";

function SearchResult({ searchTerm }) {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchTerm}&maxResults=25`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch videos");
				}

				const data = await response.json();
				const videoItems = data.items;

				// Fetch category ID for each video
				const videosWithCategory = await Promise.all(
					videoItems.map(async (video) => {
						const detailsResponse = await fetch(
							`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video.id.videoId}&key=${API_KEY}`
						);
						const detailsData = await detailsResponse.json();
						video.categoryId =
							detailsData.items[0].snippet.categoryId;
						return video;
					})
				);

				setVideos(videosWithCategory);
			} catch (error) {
				console.error("Error fetching videos:", error);
			}
		};

		if (searchTerm !== "") {
			fetchVideos();
		}
	}, [searchTerm]);

	return (
		<div>
			{videos.map((item, index) => (
				<VideoItems key={index} item={item} />
			))}
		</div>
	);
}

const VideoItems = ({ item }) => {
	const [channelData, setChannelData] = useState(null);
	const [viewCount, setViewCount] = useState(null); // Add state for view count

	useEffect(() => {
		const fetchChannelData = async () => {
			try {
				const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`;
				const response = await fetch(channelDataUrl);
				const data = await response.json();
				setChannelData(data.items[0]);
			} catch (error) {
				console.error("Error fetching channel data:", error);
			}
		};

		fetchChannelData();
	}, [item.snippet.channelId]);

	// Fetch detailed statistics (including view count)
	useEffect(() => {
		const fetchVideoStatistics = async () => {
			if (item.id && item.id.videoId) {
				// Check for video ID
				try {
					const statisticsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${item.id.videoId}&key=${API_KEY}`;
					const response = await fetch(statisticsUrl);
					const data = await response.json();
					setViewCount(data.items[0].statistics.viewCount);
				} catch (error) {
					console.error("Error fetching video statistics:", error);
				}
			}
		};

		fetchVideoStatistics();
	}, [item.id]); // Dependency on item.id to trigger on video change

	return (
		<Link
			to={`/search/${item.categoryId}/${item.id.videoId}`}
			className="card"
		>
			<div className="main" key={item.id.videoId}>
				<div className="image-box">
					<img
						src={item.snippet.thumbnails.medium.url}
						alt={item.snippet.title}
					/>
				</div>
				<div className="content-box">
					<h2>{item.snippet.title}</h2>
					<p className="video-count">
						{viewCount
							? value_coverter(viewCount)
							: "Loading views..."}{" "}
						views &bull;{" "}
						{moment(item.snippet.publishedAt).fromNow()}
					</p>
					<div className="channel-details">
						{channelData && (
							<img
								src={channelData.snippet.thumbnails.default.url}
								alt={channelData.snippet.title}
							/>
						)}
						<h3>{item.snippet.channelTitle}</h3>
					</div>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatum ipsam laboriosam ea placeat illo impedit.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default SearchResult;
