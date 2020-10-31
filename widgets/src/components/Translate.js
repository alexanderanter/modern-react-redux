import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{ label: 'Afrikaans', value: 'af' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'Hindi', value: 'hi' },
];
const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	return (
		<div>
			<Dropdown
				options={options}
				selected={language}
				// passing down a setter on the state as a prop so it can be called from a child component
				onSelectedChange={setLanguage}
				title="Select a language"
			/>
		</div>
	);
};

export default Translate;
