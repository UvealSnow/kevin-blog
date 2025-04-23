/// <reference types="astro/client" />
/// <reference types="./i18n.ts" />

declare namespace App {
	interface Locals {
		availableLocales: string[]
		defaultLocale: string
		dictionary: Record<string, LocaleDictionary>
		t: (key: string) => string
	}
}
