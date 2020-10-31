import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState('');

	useEffect(() => {
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
		translate();
	}, [text]);

	return (
		<div>
			<p>{translatedText}</p>
		</div>
	);
};

export default Convert;
