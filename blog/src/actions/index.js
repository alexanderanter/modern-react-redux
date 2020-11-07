import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
	const response = await jsonPlaceholder.get('/posts');
	//bad code, an action that does not return a plain JS object
	//after transpiling this to es2015 code this will not return an object
	//even though it looks like it! Async - Await creates lots of stuff in the background

	//By the time our gets to our reducer we wont have fetched our data
	//Error: Actions must be plain objects. Use custom middleware for async actions.
	return {
		type: 'FETCH_POSTS',
		payload: response,
	};
};
