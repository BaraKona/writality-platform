export const OpenBook = ({
	size = 16,
	className,
}: {
	size?: number;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 24 24"
			className={className}
		>
			<title>book open</title>
			<g
				stroke-linecap="round"
				stroke-linejoin="round"
				className="nc-icon-wrapper"
			>
				<line
					data-cap="butt"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					x1="12"
					y1="5"
					x2="12"
					y2="11"
				></line>{" "}
				<polyline
					data-color="color-2"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					points=" 20,5 23,5 23,21 1,21 1,5 4,5 "
				></polyline>{" "}
				<path
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					d="M14,3L14,3 c-1.105,0-2,0.895-2,2c0-1.105-0.895-2-2-2h0H4v14h6l0,0h0c1.105,0,2,0.895,2,2c0-1.105,0.895-2,2-2h0l0,0h6V3H14z"
				></path>
			</g>
		</svg>
	);
};

export const OpenBook2 = ({
	size = 16,
	className,
}: {
	size?: number;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 32 32"
			className={className}
		>
			<title>book open</title>
			<g className="nc-icon-wrapper" fill="currentColor">
				<path
					fill="currentColor"
					d="M31,6h-1V3c0-0.553-0.448-1-1-1c-7.683,0-11.504,2.347-13.005,3.611C14.481,4.352,10.633,2,3,2 C2.448,2,2,2.447,2,3v3H1C0.448,6,0,6.447,0,7v22c0,0.553,0.448,1,1,1h30c0.552,0,1-0.447,1-1V7C32,6.447,31.552,6,31,6z M4,4.015 c7.096,0.211,10.205,2.64,11,3.389V19h2V7.398c0.776-0.743,3.841-3.173,11-3.383v18.999c-6.972,0.194-10.549,2.395-11.995,3.598 C14.571,25.403,11.017,23.206,4,23.014V4.015z"
				></path>
			</g>
		</svg>
	);
};

export const OpenBook3 = ({
	size = 16,
	className,
}: {
	size?: number;
	className?: string;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 24 24"
		>
			<title>open book3</title>
			<g
				stroke-linecap="round"
				fill="currentColor"
				stroke-linejoin="round"
				className={className}
			>
				<line
					data-cap="butt"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					x1="12"
					y1="5"
					x2="12"
					y2="20"
				></line>{" "}
				<polygon
					fill="none"
					stroke="#28282B"
					stroke-width="2"
					points="1,2 12,5 23,2 23,17 12,20 1,17 "
				></polygon>{" "}
				<polyline
					data-color="color-2"
					fill="none"
					stroke="#28282B"
					stroke-width="2"
					points=" 1,21 1,23 23,23 23,21 "
				></polyline>
			</g>
		</svg>
	);
};
