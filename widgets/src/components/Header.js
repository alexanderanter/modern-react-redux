import React from 'react';
import Link from './Link';
import './header.css';

const Header = ({ color }) => {
	return (
		<div>
			<div className={`ui secondary pointing menu ${color}`}>
				<Link href="/" className="item">
					ReactFAQ
				</Link>
				<Link href="/list" className="item">
					Search
				</Link>
				<Link href="/colorpicker" className="item">
					Colorpicker
				</Link>
				<Link href="/translate" className="item">
					Translate
				</Link>
			</div>
		</div>
	);
};

export default Header;
