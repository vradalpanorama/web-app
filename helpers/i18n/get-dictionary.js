import 'server-only'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  no: () => import('./dictionaries/no.json').then((module) => module.default),
}

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()

export const getDictionaries = async () => ({
  en: await dictionaries.en(),
  no: await dictionaries.no()
})