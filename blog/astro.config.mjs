// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import i18n from '@kevhah/i18n'

import react from '@astrojs/react'

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
				'@icons': '/src/icons',
				'@utils': '/src/utils',
			},
		},
		plugins: [tailwindcss()],
	},
	integrations: [
		i18n({
			config: {
				availableLocales: ['en-US', 'es-ES'],
				defaultLocale: 'en-US',
				dictionary: {
					'en-US': {
						hello: 'Aloha, World!',
						friends: {
							mex: 'Crazy guys',
						},
					},
					'es-ES': {
						hello: 'Aloha, Mundo!',
						friends: {
							mex: 'Locos',
						},
					},
				},
			},
		}),
		react(),
	],
})
