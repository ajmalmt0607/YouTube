import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import { API_KEY, value_coverter } from "../../utils/data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
	const { videoId } = useParams();
	const [apiData, setApiData] = useState(null);
	const [channelData, setChannelData] = useState(null);
	const [commentData, setCommentData] = useState([]);

	const fetchVideoData = async () => {
		//Fetching Videos Data
		const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=${videoId}`;
		await fetch(videoDetails_url)
			.then((res) => res.json())
			.then((data) => setApiData(data.items[0]));
	};
	const fetchOtherData = async () => {
		//fetching channel Data - subscriber count,logo...etc
		const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
		await fetch(channelData_url)
			.then((res) => res.json())
			.then((data) => setChannelData(data.items[0])); //giving [0] get the object in items array

		//fetching Comment Data
		const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${API_KEY}&videoId=${videoId}`;
		await fetch(comment_url)
			.then((res) => res.json())
			.then((data) => setCommentData(data.items));
	};

	useEffect(() => {
		fetchVideoData();
	}, [videoId]);

	useEffect(() => {
		fetchOtherData();
	}, [apiData]); //when api data will data will be updated onlt this fetchotherdata() wiil executed

	return (
		<div className="play-video">
			{/* <video src={video1} controls autoPlay muted></video> */}
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<h3 className="play-video-title">
				{apiData ? apiData.snippet.title : "Title Here"}
			</h3>
			<div className="play-video-info">
				<div className="publisher">
					<img
						src={
							channelData
								? channelData.snippet.thumbnails.default.url
								: ""
						}
						alt=""
					/>
					<div>
						<p>{apiData ? apiData.snippet.channelTitle : ""}</p>
						<span>
							{channelData
								? value_coverter(
										channelData.statistics.subscriberCount
								  )
								: "1M"}{" "}
							Subscribers
						</span>
					</div>
					<button>Subscribe</button>
				</div>
				<div className="buttons-play">
					<span className="icon-container">
						<BiLike className="icon" />
						<span className="m-10">
							{apiData
								? value_coverter(apiData.statistics.likeCount)
								: 155}
						</span>
						<BiDislike className="icon" />
					</span>
					{/* <span className="icon-container margin-5">
						<BiDislike className="icon" />
					</span> */}
					<span className="icon-container margin-5">
						<PiShareFatBold className="icon" />
						Share
					</span>
					<span className="icon-container margin-5">
						<LiaDownloadSolid className="icon" />
						Download
					</span>
					<span className="icon-container">
						<BsThreeDots className="icon" />
					</span>
				</div>
			</div>

			{/* <div className="publisher">
				<img src={jack} alt="" />
				<div>
					<p>Visual Romance</p>
					<span>1M Subscribers</span>
				</div>
				<button>Subscribe</button>
			</div> */}
			<div className="vid-description">
				<div className="vid-description-container">
					<span className="vid-views">
						{apiData
							? value_coverter(apiData.statistics.viewCount)
							: "16K"}{" "}
						views &bull;{" "}
						{apiData
							? moment(apiData.snippet.publishedAt).fromNow()
							: ""}
					</span>
					<p>
						{apiData
							? apiData.snippet.description.slice(0, 400)
							: "Description Here"}
					</p>
				</div>
				<h4>
					{apiData
						? value_coverter(apiData.statistics.commentCount)
						: 102}{" "}
					Comments
				</h4>
				{commentData.map((item, index) => {
					return (
						<div className="comment" key={index}>
							<img
								src={
									item.snippet.topLevelComment.snippet
										.authorProfileImageUrl
								}
								alt=""
							/>
							<div>
								<h3>
									{
										item.snippet.topLevelComment.snippet
											.authorDisplayName
									}{" "}
									<span>
										{moment(
											item.snippet.topLevelComment.snippet
												.publishedAt
										).fromNow()}
									</span>
								</h3>
								<p>
									{
										item.snippet.topLevelComment.snippet
											.textDisplay
									}
								</p>
								<div className="comment-action">
									<BiLike className="comment-icon" />
									<span>
										{value_coverter(
											item.snippet.topLevelComment.snippet
												.likeCount
										)}
									</span>
									<BiDislike className="comment-icon" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlayVideo;
