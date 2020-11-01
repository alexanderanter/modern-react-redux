import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		searchVideos(defaultTerm);
	}, [defaultTerm]);

	const searchVideos = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
	};
	return [videos, searchVideos];
};
export default useVideos;
