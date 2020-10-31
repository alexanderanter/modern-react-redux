import React, { useState } from 'react';

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

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
			<div
				onClick={() => setOpen(!open)}
				className={`ui selection dropdown ${open ? ' visible active' : ''}`}
			>
				<i className="dropdown icon"></i>
				<div className="text">{selected.label}</div>
				<div className={`menu ${open ? ' visible transition' : ''}`}>
					{renderedOptions}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
