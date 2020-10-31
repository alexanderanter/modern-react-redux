import React, { useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState('');
	const translate = async () => {
		const { data } = await axios.get(
			'https://translation.googleapis.com/language/translate/v2',
			{
				params: {
					q: text,
					target: language.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
				},
			}
		);
		console.log(data.data.translations[0].translatedText);

		setTranslatedText(data.data.translations[0].translatedText);
	};
	const handleTranslate = () => {
		translate();
	};
	return (
		<div>
			<p>{language.label}</p>
			<p>{text}</p>
			<button
				onClick={() => {
					handleTranslate();
				}}
			>
				TRANSLATE
			</button>
			<p>{translatedText}</p>
		</div>
	);
};

export default Convert;
