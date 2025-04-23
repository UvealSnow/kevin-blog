import type { AstroIntegration } from 'astro'
import { type UserInterfaceI18nConfig } from './types.js'
import { writeFileSync } from 'node:fs'

export type I18nOptions = {
	config: UserInterfaceI18nConfig
}

export default function createPlugin(options: I18nOptions): AstroIntegration {
	return {
		name: '@kevhah/i18n',
		hooks: {
			'astro:config:setup': ({ addMiddleware, createCodegenDir }): void | Promise<void> => {
				const codegenDir = createCodegenDir()
				writeFileSync(new URL('cache.json', codegenDir), JSON.stringify(options.config), 'utf-8')
				addMiddleware({
					entrypoint: new URL('./middleware.js', import.meta.url),
					order: 'pre',
				})
			},
		},
	}
}
