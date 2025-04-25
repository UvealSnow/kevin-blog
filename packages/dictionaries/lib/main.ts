type Dictionary = Record<string, LocaleDictionary>

interface LocaleDictionary {
	[key: string]: string | LocaleDictionary
}

interface Module {
  default: LocaleDictionary
}

export const getDictionary = (site: string): Dictionary => {
  const dictionaries: Dictionary = {}

  // @ts-ignore
  const modules = import.meta.glob('./i18n/**/*.json', {eager: true})

  for (const path in modules) {
    if (path.includes(site)) {
      const matches = path.match(/[a-z]{2}-[A-Z]{2}/)
      if (matches != null) {
        const locale = matches[0] as string
        const module = modules[path] as Module;
        dictionaries[locale] = module.default as LocaleDictionary
      }
    }
  }

  return dictionaries
}
