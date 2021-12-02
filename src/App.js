import { useEffect, createRef } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
	const btnRef = createRef();

	useEffect(
		() => {
			const btn = btnRef.current;

			const pointerEnterHandle = () => {
				btn.style.background = 'red';
			};

			const pointerLeaveHandle = () => {
				btn.style.background = 'blue';
			};
			btn.style.background = 'blue';
			btn.style.color = 'white';

			btn.onpointerenter = pointerEnterHandle;
			btn.onpointerleave = pointerLeaveHandle;

			btn.addEventListener('onpointerenter', pointerEnterHandle);
			btn.addEventListener('onpointerleave', pointerLeaveHandle);

			return () => {
				btn.removeEventListener('onpointerenter', pointerEnterHandle);
				btn.removeEventListener('onpointerleave', pointerLeaveHandle);
			};
		},
		[ btnRef ]
	);

	return (
		<div className="App">
			<Button ref={btnRef}>Point over me!</Button>
		</div>
	);
}

export default App;
