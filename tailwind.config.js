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
				border: "#e0e0e0",
				text: "#394251",
				primary: "#8AAAD1",
				primaryHover: "#7A9AC1",
			},
		},
	},
	plugins: [],
};
