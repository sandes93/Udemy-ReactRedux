import React from 'react';


import  VideoList from './video_list';
import VideoListItem from './video_list_item';

const VideoDetail = ({video}) => {

	if (!video) {
		return <div>loading video...</div>;
	} 

	const videoId = video.id.videoId;
	const url = `https://youtube.com/embed/${videoId}`;

	console.log(url)

	return (
			<div className = "video-detail col-md-8">
				<div className = "embed-responsive embed-responsive-16by9">
					<iframe className= "embed-responsive-item" src= {url}></iframe>
				</div>
				<div className = "details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>				
				</div>
			</div>
		);
};

export default VideoDetail;