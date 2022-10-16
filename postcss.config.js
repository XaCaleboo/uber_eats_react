export default {
	plugins: {
		'postcss-nested': {},
		'autoprefixer': {},
		'postcss-custom-media': {
			importFrom: 'src/utilities/breakpoints.pcss'
		},
	}
}
