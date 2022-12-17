export default {
	plugins: {
		'postcss-mixins': {},
		'postcss-nested': {},
		'autoprefixer': {},
		'postcss-custom-media': {
			importFrom: 'src/utilities/breakpoints.pcss'
		},
	}
}
