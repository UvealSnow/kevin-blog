// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import i18n from '@kevhah/i18n'
import { getDictionary } from '@kevhah/dictionaries'

const dictionary = getDictionary('kevin-avila')
const availableLocales = (process.env.UI_LOCALES ?? 'en-US').split(',')
const defaultLocale = process.env.UI_DEFAULT_LOCALE ?? 'en-US'

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': {
			status: 302,
			destination: `/${defaultLocale}`,
		},
	},
	i18n: {
		locales: availableLocales,
		defaultLocale,
		routing: 'manual',
	},
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@icons': '/src/icons',
				'@utils': '/src/utils',
				'@src': '/src',
			},
		},
		plugins: [tailwindcss()],
	},
	integrations: [
		i18n({
			config: {
				availableLocales,
				defaultLocale,
				// @ts-ignore
				dictionary,
			},
		}),
	],
})
