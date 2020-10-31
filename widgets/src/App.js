import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
	{
		title: 'What is React',
		content: 'React is a front end js framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS lib',
	},
	{
		title: 'How do you use react?',
		content: 'You use it by creating components',
	},
];

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
export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			{/* <Accordion items={items} /> */}
			<Dropdown
				options={options}
				//update the selected item from state
				selected={selected}
				// passing down a setter on the state as a prop so it can be called from a child component
				onSelectedChange={setSelected}
				title="Select a color"
			/>
		</div>
	);
};
