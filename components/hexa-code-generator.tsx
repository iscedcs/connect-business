// the HexCodeGenerator component that stores the generated code in local storage and regenerates it if it already exists:
'use client';
import React from 'react';

function generateHexCode(): string {
	const prefix = '!';
	const hexDigits = '0123456789ABCDEF';
	let code = prefix;
	for (let i = 0; i < 7; i++) {
		code += hexDigits[Math.floor(Math.random() * 16)];
	}
	return code;
}

export default function HexCodeGenerator() {
	const [code, setCode] = React.useState<string>('');

	React.useEffect(() => {
		// Check if code exists in local storage
		const storedCode = localStorage.getItem('hexCode');
		if (storedCode) {
			setCode(storedCode);
		}
	}, []);

	function handleClick() {
		let newCode = generateHexCode();
		// Check if code already exists in local storage
		while (localStorage.getItem(newCode)) {
			newCode = generateHexCode();
		}
		// Store new code in local storage
		localStorage.setItem(newCode, 'true');
		localStorage.setItem('hexCode', newCode);
		setCode(newCode);
	}

	return (
		<div>
			<button onClick={handleClick}>Generate Code</button>
			{code && <p>{code}</p>}
		</div>
	);
}
// This updated version of the component uses the localStorage API to store the generated code and check if it already exists. When the component mounts, it checks if a code is already stored in local storage and displays it if it exists. When the "Generate Code" button is clicked, the component generates a new code and checks if it already exists in local storage. If it does, it generates a new code and checks again until it finds a unique code. Once a unique code is generated, it stores it in local storage and displays it in the component.

// Note that this implementation assumes that the generated codes will have a low probability of collision, since it uses a simple loop to generate new codes until a unique one is found. If collision avoidance is critical, a more sophisticated algorithm may be needed.
