const { tailwindConfig } = require('@f*g/felix')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				...tailwindConfig,
				felix: {
					DEFAULT: '#adff2f',
				},
			},
		},
	},
	plugins: [],
}
