import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};
	useEffect(() => {
		onTermSubmit('Rick Astley - Never Gonna Give You Up');
	}, []);

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};
	return (
		<div>
			<div className="ui container">
				<SearchBar onTermSubmit={onTermSubmit} />
			</div>
			<div className="ui grid">
				<div className="row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={onVideoSelect} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
