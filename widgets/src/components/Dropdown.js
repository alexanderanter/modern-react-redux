import React from 'react';

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
	const renderedOptions = options.map((option) => {
		return (
			<div
				// set the state with the current option through the setter function that was passed down
				onClick={() => onSelectedChange(option)}
				className="item"
				key={option.value}
				value={option.value}
			>
				{option.label}
			</div>
		);
	});
	return (
		<div className="ui form">
			<div className="field">
				<label className="label">{title}</label>
			</div>
			<div className="ui selection dropdown visible active">
				<i className="dropdown icon"></i>
				<div className="text">{selected.label}</div>
				<div className="menu visible transition">{renderedOptions}</div>
			</div>
		</div>
	);
};

export default Dropdown;
