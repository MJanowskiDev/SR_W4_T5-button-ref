import { useEffect, createRef } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
	const btnRef = createRef();

	useEffect(
		() => {
			const pointerEnterHandle = () => {
				btnRef.current.style.background = 'red';
			};

			const pointerLeaveHandle = () => {
				btnRef.current.style.background = 'blue';
			};
			btnRef.current.style.background = 'blue';
			btnRef.current.style.color = 'white';

			btnRef.current.onpointerenter = pointerEnterHandle;
			btnRef.current.onpointerleave = pointerLeaveHandle;
		},
		[ btnRef ]
	);

	return (
		<div className='App'>
			<Button ref={btnRef}>Point over me!</Button>
		</div>
	);
}

export default App;
