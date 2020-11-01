import React, { useState } from 'react';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import ReactFAQ from './pages/ReactFAQ';
import ColorPicker from './pages/ColorPicker';

export default () => {
	const [colorElement, setColorElement] = useState(null);

	return (
		<div>
			<Header color={colorElement} />
			<Route path="/">
				<ReactFAQ />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/colorpicker">
				<ColorPicker
					color={(element) => {
						setColorElement(element);
					}}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
