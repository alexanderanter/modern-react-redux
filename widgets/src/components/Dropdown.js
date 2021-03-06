import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(true);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			//exit  if the dropdown does not exist or the dropdown itself been clicked
			if (ref.current == null || ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
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
		<div ref={ref} className="ui form">
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
