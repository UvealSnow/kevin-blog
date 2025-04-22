export function getAvailableLocales(): string[] {
	if (
		typeof process.env.UI_LOCALES !== 'string' ||
		!/^[a-z]{2}-[A-Z]{2}(,[a-z]{2}-[A-Z]{2})*$/.test(process.env.UI_LOCALES)
	) {
		return ['en-US']
	}

	return process.env.UI_LOCALES?.split(',')
}

export function getDefaultLocale(): string {
	if (
		typeof process.env.UI_DEFAULT_LOCALE !== 'string' ||
		!/^[a-z]{2}-[A-Z]{2}$/.test(process.env.UI_DEFAULT_LOCALE)
	) {
		return 'en-US'
	}

	return process.env.UI_DEFAULT_LOCALE
}

export async function getTranslationTexts() {}
