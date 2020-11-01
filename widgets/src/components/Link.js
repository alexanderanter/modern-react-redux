import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		event.preventDefault();
		window.history.pushState({}, '', href);

		//let route component know that the url have changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
