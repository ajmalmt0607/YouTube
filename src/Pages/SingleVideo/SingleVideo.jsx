import React from "react";
import "./SingleVideo.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
	const { videoId, categoryId } = useParams();
	return (
		<div className="play-container">
			<PlayVideo videoId={videoId} />
			<Recommended categoryId={categoryId} />
		</div>
	);
};

export default SingleVideo;
