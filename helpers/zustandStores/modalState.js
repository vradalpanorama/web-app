import { create } from "zustand";
import { fetchRequest } from "@/helpers/fetchRequest";

/* main */
const useModalState = create((set) => ({
    isVisibleModal: false,
    type: null, 
    slug: null,

    openModal: ({ type, slug }) => {
        set({
            isVisibleModal: true,
            type,
            slug,
        });
    },

    closeModal: () => {
        set({
            isVisibleModal: false,
            type: null,
            slug: null,
        });
    },
}));

const useToastModalState = create((set, get) => ({
    status: "default",
    label: null,
    title: null,
    lead: null,
    action: null,

    showToast: (label, title, lead, action) => {
        const { hideToast, status } = get();
        if (status !== "show") {
            const intervalID = setTimeout(() => {
                hideToast();
            }, 3000);

            set({
                status: "show",
                label,
                title,
                lead,
                action,
                intervalID,
            });
        }
    },
    hideToast: () => {
        const { intervalID } = get();
        clearTimeout(intervalID);
        set({
            status: "default",
            label: null,
            title: null,
            lead: null,
            action: null,
        });
    },
}));

const usePromotionModalState = create((set, get) => ({
    status: "default",
    section: "undefined",
    lang: "undefined",
    promotionData: null,

    loadPromotionData: async (sectionParams, langParams) => {
        const section = sectionParams ? sectionParams : get().section;
        const lang = langParams ? langParams : get().lang;

        set({
            status: "loading",
            section: section,
            lang: lang,
            promotionData: { title: ["Loading...."] },
        });

        try {
            const data = await fetchRequest(`/api/modal?q=${section}`);
            if (data.error) {
                set({
                    status: "error",
                    promotionData: data.error[lang],
                });
            } else {
                set({
                    status: "success",
                    promotionData: data[lang],
                });
            }
        } catch (err) {
            const errorData = {
                en: {
                    title: ["Server Error"],
                    content: [
                        "Ooops, something went wrong",
                        "Please try again.",
                    ],
                },
                no: {
                    title: ["Server Error"],
                    content: ["Ooops, noe gikk galt", "Vennligst prøv igjen."],
                },
            };
            set({ status: "error", promotionData: errorData[lang] });
        }
    },
}));

export { useModalState, useToastModalState, usePromotionModalState };
