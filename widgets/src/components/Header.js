import React, { useRef, useEffect } from 'react';

const Header = ({ getRef }) => {
	const navigationEl = useRef();

	useEffect(() => {
		getRef(navigationEl.current);
	}, [navigationEl]);

	return (
		<div className="ui secondary pointing menu" ref={navigationEl}>
			<a href="/" className="item">
				ReactFAQ
			</a>
			<a href="/list" className="item">
				Search
			</a>
			<a href="/colorpicker" className="item">
				Colorpicker
			</a>
			<a href="/translate" className="item">
				Translate
			</a>
		</div>
	);
};

export default Header;
