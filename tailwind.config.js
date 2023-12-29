const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		screens: {
			'xs' : '360px',
			'sm' : '480px',
			'md' : '768px',
			'lg' : '976px',
			'xl' : '1280px',
		},
		// colors: {
		// 	'bubble-gum': '#d3dce6',
		// 	'bg-nav-color': '#062D4E',
		// }
	},
	plugins: [
		iconsPlugin({
		// Select the icon collections you want to use
		collections: getIconCollections(["mdi", "uil"]),
		}),
	],
}