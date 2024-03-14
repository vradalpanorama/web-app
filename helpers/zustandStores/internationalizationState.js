import { create } from "zustand";

const useInternationalizationState = create((set, get) => ({
    status: "default",
    dictionaries: null,
    lang: null,
    setDictionaries: (dictionaries, lang) => {
        console.log(dictionaries, lang);
        set({
            status: "ready",
            dictionaries,
            lang,
        });
    },
    getCurrentDictionary: (section) => {
        const { status, dictionaries, lang } = get();
        if (status !== "ready") return {};
        if (section) {
            return dictionaries[lang][section];
        } else {
            return dictionaries[lang];
        }
    },
}));

export { useInternationalizationState };
