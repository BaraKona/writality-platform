export const Network = ({
	className,
	size = 16,
}: {
	className?: string;
	size?: number;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 48 48"
		>
			<title>people network</title>
			<g
				stroke-linecap="round"
				fill="currentColor"
				stroke-linejoin="round"
				className={className}
			>
				<circle
					data-color="color-2"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
					cx="24"
					cy="6"
					r="4"
				></circle>{" "}
				<circle
					data-color="color-2"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
					cx="42"
					cy="16"
					r="4"
				></circle>{" "}
				<circle
					data-color="color-2"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					cx="6"
					cy="16"
					r="4"
				></circle>{" "}
				<path
					data-cap="butt"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					d="M18.91,36.172l-6.486,2.789 C10.954,39.591,10,41.037,10,42.638V46h28v-3.362c0-1.6-0.954-3.046-2.424-3.677l-6.501-2.776"
				></path>{" "}
				<path
					fill="none"
					stroke="currentColor"
					stroke-width="4"
					d="M24,38L24,38 c-4.418,0-8-3.582-8-8v-2c0-4.418,3.582-8,8-8h0c4.418,0,8,3.582,8,8v2C32,34.418,28.418,38,24,38z"
				></path>
			</g>
		</svg>
	);
};
export const Network2 = ({
	className,
	size = 16,
}: {
	className?: string;
	size?: number;
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 48 48"
		>
			<title>networking</title>
			<g
				stroke-linecap="round"
				fill="currentColor"
				stroke-linejoin="round"
				className={className}
			>
				<polyline
					data-cap="butt"
					data-color="color-2"
					points="24 17 24 26 15.314 33.445"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
				></polyline>
				<line
					data-cap="butt"
					data-color="color-2"
					x1="24"
					y1="26"
					x2="32.686"
					y2="33.445"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
				></line>
				<circle
					cx="24"
					cy="10"
					r="7"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<circle
					cx="10"
					cy="38"
					r="7"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<circle
					cx="38"
					cy="38"
					r="7"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
				></circle>
			</g>
		</svg>
	);
};
