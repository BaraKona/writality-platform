/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./public/splashscreen.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// flat white color scheme with white and black (different shades of white and black)
				background: "#fff",
				backgroundHover: "#f9f9f9",
				hover: "#f0f0f0",
				border: "#d2d2d2",
				text: "#151414",
				textLight: "#8A8A8A",
				primary: "#8AAAD1",
				primaryHover: "#7A9AC1",
				// black: "#151414",
				matteBlack: "#28282B",
				blackHover: "#0e0e0e",
				highLight: "#006400",
			},
		},
	},
	plugins: [],
};
