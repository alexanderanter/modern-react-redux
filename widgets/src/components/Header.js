import React from 'react';
import './header.css';

const Header = ({ color }) => {
	return (
		<div>
			<div className={`ui secondary pointing menu ${color}`}>
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
		</div>
	);
};

export default Header;
