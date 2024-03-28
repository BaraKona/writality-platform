/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// flat white color scheme with white and black (different shades of white and black)
				background: "#fff",
				hover: "#f0f0f0",
				border: "#e0e0e0",
			},
		},
	},
	plugins: [],
};
