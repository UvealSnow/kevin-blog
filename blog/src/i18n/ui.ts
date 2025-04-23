// export function getAvailableLocales(): string[] {
// 	if (
// 		typeof process.env.UI_LOCALES !== 'string' ||
// 		!/^[a-z]{2}-[A-Z]{2}(,[a-z]{2}-[A-Z]{2})*$/.test(process.env.UI_LOCALES)
// 	) {
// 		return ['en-US']
// 	}

// 	return process.env.UI_LOCALES?.split(',')
// }

// export function getDefaultLocale(): string {
// 	if (
// 		typeof process.env.UI_DEFAULT_LOCALE !== 'string' ||
// 		!/^[a-z]{2}-[A-Z]{2}$/.test(process.env.UI_DEFAULT_LOCALE)
// 	) {
// 		return 'en-US'
// 	}

// 	return process.env.UI_DEFAULT_LOCALE
// }

// export async function getTranslationTexts() {}

interface LocaleDictionary {
	[key: string]: string | LocaleDictionary | (() => string)
}

interface UserInterfaceI18nConfig {
	defaultLocale: string
	availableLocales: string[]
	dictionary: LocaleDictionary
}

class UserInterfaceI18n {
	private static singleton: UserInterfaceI18n
	private defaultLocale: string
	private availableLocales: string[]
	private dictionary: LocaleDictionary

	private constructor(config: UserInterfaceI18nConfig) {
		this.defaultLocale = config.defaultLocale
		this.availableLocales = config.availableLocales
		this.dictionary = config.dictionary
	}

	static init(config: UserInterfaceI18nConfig) {
		UserInterfaceI18n.singleton = new UserInterfaceI18n(config)
	}

	static get instance() {
		if (!UserInterfaceI18n.singleton) {
			throw new Error('Singleton not initialized')
		}

		return UserInterfaceI18n.singleton
	}
}
