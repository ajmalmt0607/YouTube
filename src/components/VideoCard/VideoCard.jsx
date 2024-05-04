// import React, { useEffect, useState } from "react";
// import "./VideoCard.css";
// import jack from "../../assets/jack.png";
// import { Link } from "react-router-dom";
// import { API_KEY, value_coverter } from "../../data";
// import moment from "moment";

// const VideoCard = ({ category }) => {
// 	const [data, setData] = useState([]);

// 	const fetchData = async () => {
// 		const videList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
// 		await fetch(videList_url)
// 			.then((response) => response.json())
// 			.then((data) => setData(data.items));
// 	};

// 	useEffect(() => {
// 		fetchData();
// 	}, [category]);

// 	return (
// 		<div className="feed">
// 			{data.map((item, index) => {
// 				return (
// 					<Link
// 						to={`video/${item.snippet.categoryId}/${item.id}`}
// 						className="card"
// 						key={index}
// 					>
// 						<img src={item.snippet.thumbnails.medium.url} alt="" />
// 						<div className="channel-info">
// 							<div className="channel-logo">
// 								<img src={jack} alt="" />
// 							</div>
// 							<div>
// 								<h2>{item.snippet.title}</h2>
// 								<h3>{item.snippet.channelTitle}</h3>
// 								<p>
// 									{value_coverter(item.statistics.viewCount)}{" "}
// 									views &bull;{" "}
// 									{moment(item.snippet.publishedAt).fromNow()}
// 								</p>
// 							</div>
// 						</div>
// 					</Link>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default VideoCard;
import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import { API_KEY, value_coverter } from "../../utils/data";
import moment from "moment";

const VideoCard = ({ category }) => {
	const [videoData, setVideoData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const videList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
				const response = await fetch(videList_url);
				const data = await response.json();
				setVideoData(data.items);
			} catch (error) {
				console.error("Error fetching video data:", error);
			}
		};

		fetchData();
	}, [category]);

	return (
		<div className="feed">
			{videoData.map((item, index) => (
				<VideoItem key={index} item={item} />
			))}
		</div>
	);
};

const VideoItem = ({ item }) => {
	const [channelData, setChannelData] = useState(null);

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

	return (
		<Link
			to={`video/${item.snippet.categoryId}/${item.id}`}
			className="card"
		>
			<img src={item.snippet.thumbnails.medium.url} alt="" />
			<div className="channel-info">
				<div className="channel-logo">
					{channelData && (
						<img
							src={channelData.snippet.thumbnails.default.url}
							alt={channelData.snippet.title}
						/>
					)}
				</div>
				<div>
					<h2>{item.snippet.title}</h2>
					<h3>{item.snippet.channelTitle}</h3>
					<p>
						{value_coverter(item.statistics.viewCount)} views &bull;{" "}
						{moment(item.snippet.publishedAt).fromNow()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard;
