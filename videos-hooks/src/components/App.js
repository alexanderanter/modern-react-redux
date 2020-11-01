import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, searchVideos] = useVideos(
		'Rick Astley - Never Gonna Give You Up'
	);
	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div>
			<div className="ui container">
				<SearchBar onTermSubmit={searchVideos} />
			</div>
			<div className="ui grid">
				<div className="row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
