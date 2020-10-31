import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
	{ label: 'Afrikaans', value: 'af' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'Hindi', value: 'hi' },
];
const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				options={options}
				selected={language}
				// passing down a setter on the state as a prop so it can be called from a child component
				onSelectedChange={setLanguage}
				title="Select a language"
			/>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
