import { create } from "zustand";
import { fetchRequest } from "../fetchRequest";

const useWidgetState = create((set, get) => ({
    fixedPosition: false,
    setPosition: (inView) => {
        const { fixedPosition } = get();

        if (inView) {
            set({ fixedPosition: true });
        } else {
            set({ fixedPosition: false });
        }
    },

    leftPartEdge: undefined,
    scrollStatus: undefined,

    setLeftPartEdge: (edge) => {
        set({
            leftPartEdge: edge,
        });
    },
    scrollToAnotherEdge: () => {
        set({
            scrollStatus: "scroll",
        });
    },
    scrollToAnotherEdgeDone: () => {
        set({
            scrollStatus: "done",
        });
    },
}));

const useWidgetServiceSectionDataState = create((set, get) => ({
    status: "default",
    widgetServiceSectionData: null,

    loadWidgeServiceSectionData: async () => {
        set({ status: "loading" });
        try {
            const dataResponse = await fetchRequest(
                "/api/resort-conditions?q=service-section-widget"
            );
            if (dataResponse.error) {
                set({
                    status: "error",
                    widgetServiceSectionData: dataResponse,
                });
                console.log(dataResponse);
            } else {
                set({
                    status: "success",
                    widgetServiceSectionData: dataResponse,
                });
                console.log(dataResponse);
            }
        } catch (err) {
            set({ status: "error" });
        }
    },
}));

// const useWidgetInternationalizationState = create((set, get) => ({
//     status: "default",
//     i18nData: null,
//     setI18nData: (i18nData) => {
//         set({
//             status: "ready",
//             i18nData: i18nData,
//         });
//     },
// }));

export {
    useWidgetState,
    useWidgetServiceSectionDataState,
    // useWidgetInternationalizationState,
};
