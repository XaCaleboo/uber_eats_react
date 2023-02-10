/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), checker({
		eslint: {
			lintCommand: 'eslint "./**/*.{ts,tsx}"',
		},
		typescript: true,
	})],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utilities': path.resolve(__dirname, './src/utilities'),
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
})
