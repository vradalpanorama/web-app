import { create } from "zustand";

const useCoverState = create((set, get) => ({
    imageCoverLoad: undefined,
    contentOnHover: undefined,

    setImageCoverLoad: (imageLoad) => {
        const imageCoverLoad = imageLoad;
        set({
            imageCoverLoad,
        });
    },

    setContentOnHover: () => {
        set({
            contentOnHover: true,
        });
    },

    unsetContentOnHover: () => {
        set({
            contentOnHover: false,
        });
    },
}));

export { useCoverState };
