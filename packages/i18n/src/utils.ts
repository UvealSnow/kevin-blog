import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { UserInterfaceI18nConfig } from './types.js'

const SAFE_CHARS_RE = /[^\w.-]/g

export function normalizeCodegenDir(integrationName: string): string {
	return `.astro/integrations/${integrationName.replace(SAFE_CHARS_RE, '_')}/`
}

export function readCache(): UserInterfaceI18nConfig {
	try {
		return JSON.parse(
			readFileSync(resolve(process.cwd(), normalizeCodegenDir('@kevhah/i18n'), 'cache.json'), {
				encoding: 'utf-8',
				flag: 'r',
			}),
		) satisfies UserInterfaceI18nConfig
	} catch (error) {
		console.error('@kevhah/i18n: Could not read cache', error)
		return {
			availableLocales: [],
			defaultLocale: '',
			dictionary: {},
		} satisfies UserInterfaceI18nConfig
	}
}
