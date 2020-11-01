import React, { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';

const options = [
	{
		label: 'The color red',
		value: 'red',
	},
	{
		label: 'The color green',
		value: 'green',
	},
	{
		label: 'The color blue',
		value: 'blue',
	},
];

const ColorPicker = ({ color }) => {
	const [selected, setSelected] = useState(options[0]);
	useEffect(() => {
		color(selected.value);
	}, [selected, color]);
	return (
		<Dropdown
			label="Select a color"
			options={options}
			selected={selected}
			onSelectedChange={setSelected}
		/>
	);
};

export default ColorPicker;
