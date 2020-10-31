import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(true);
	const dropdownEl = useRef();

	useEffect(() => {
		document.body.addEventListener('click', (e) => {
			if (dropdownEl.current.contains(e.target)) {
				return;
			}
			setOpen(false);
		});
	}, []);
	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				// set the state with the current option through the setter function that was passed down
				onClick={() => {
					onSelectedChange(option);
				}}
				className="item"
				key={option.value}
				value={option.value}
			>
				{option.label}
			</div>
		);
	});
	return (
		<div ref={dropdownEl} className="ui form">
			<div className="field">
				<label className="label">{title}</label>
			</div>
			<div
				onClick={() => {
					setOpen(!open);
				}}
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
