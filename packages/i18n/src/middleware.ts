import type { MiddlewareHandler } from 'astro'
import type { LocaleDictionary } from './types.js'
import { readCache } from './utils.js'

export const onRequest: MiddlewareHandler = (context, next) => {
	const { availableLocales, defaultLocale, dictionary } = readCache()

	context.locals.availableLocales = availableLocales
	context.locals.defaultLocale = defaultLocale
	context.locals.dictionary = dictionary
	context.locals.t = (key: string) => {
		let locale = context.params.locale ?? defaultLocale
			const check = (key: string, dict: LocaleDictionary | undefined): string | false => {
				const [k, ...rest] = key.split('.')
				if (typeof dict === 'undefined' || !(k in dict)) return false
				if (typeof dict === 'object' && rest.length)
					return check(rest.join('.'), dict[k] as LocaleDictionary)
				if (typeof dict[k] === 'string') return dict[k]
				return false
			}

			return check(key, dictionary[locale]) || check(key, dictionary[defaultLocale]) || key
		}

	return next()
}
