/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				shadowHead: '0px 6px 10px 0px rgba(129, 129, 129, 0.10)',
				shadowSearch: '0px 4px 20px 0px rgba(159, 159, 159, 0.10)',
				shadowProduct: '0px 10px 20px 0px rgba(159, 159, 159, 0.10)',
			},
			colors: {
				textColor: '#2C2C2C',
				textSecondary: '#FF8A00',
				primary: '#FF8A00',
				secondary: '#FFF6E4',
				mainBg: '#FAFBFC',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
		screens: {
			sl: '320px',
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
