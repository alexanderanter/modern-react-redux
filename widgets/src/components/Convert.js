import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);
		return () => {
			clearTimeout(timeOutId);
		};
	}, [text]);

	useEffect(() => {
		const translate = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);
			setTranslatedText(data.data.translations[0].translatedText);
		};
		translate(debouncedText);
	}, [debouncedText, language]);

	return (
		<div>
			<h1 className="ui header">{translatedText}</h1>
		</div>
	);
};

export default Convert;
