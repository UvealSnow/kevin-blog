// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ['en-US', 'es-ES'],
		defaultLocale: 'en-US',
		routing: 'manual',
	},
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
			},
		},
	},
})
