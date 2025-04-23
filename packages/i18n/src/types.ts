export interface LocaleDictionary {
	[key: string]: string | LocaleDictionary
}

export interface UserInterfaceI18nConfig<L extends string[] = string[]> {
	availableLocales: L
	defaultLocale: L[number]
	dictionary: Record<L[number], LocaleDictionary>
}
