import { forwardRef } from 'react';
const styles = {
	padding: 10,
	borderRadius: 6,
	fontWeight: 700,
	letterSpacing: 2,
	border: 'none'
};

const Button2 = forwardRef(({ children }, ref) => (
	<button style={styles} ref={ref}>
		{children}
	</button>
));
export default Button2;
