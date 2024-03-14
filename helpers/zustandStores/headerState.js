import { create } from "zustand";

export const useHeaderState = create((set, get) => ({
    isLoaded: false,

    onCover: undefined,
    setOnCover: (inView) => {
        set({ isLoaded: true });
        if (inView) {
            set({ onCover: true });
        } else {
            set({ onCover: false });
        }
    },

    onContent: undefined,
    setOnContent: (inView) => {
        set({ isLoaded: true });
        if (inView) {
            set({ onContent: false });
        } else {
            set({ onContent: true });
        }
    },
}));

export const useSideBarState = create((set, get) => ({
    isOpen: false,
    openSideBar: () => {
        set({ isOpen: true });
    },

    closeSideBar: () => {
        set({ isOpen: false });
    },
    setOpen: () => {
        const { isOpen } = get();
        set({ isOpen: !isOpen });
    },
}));

export const useNavigationDesktop = create((set, get) => ({
    activeSection: undefined,
    activeSectionWidth: undefined,

    setActiveSection: (section, sectionWidth) => {
        if (!sectionWidth) {
            const { activeSectionWidth } = get();
            sectionWidth = activeSectionWidth;
        }
        set({
            activeSection: section,
            activeSectionWidth: sectionWidth,
        });
    },

    removeActiveSection: (section) => {
        const { activeSection } = get();
        if (activeSection === section) {
            set({
                activeSection: null,
            });
        }
    },
}));

export const useNavigationSidebar = create((set, get) => ({
    activeSectionParams: undefined,
    setActiveSectionParams: (section) => {
        set({
            activeSectionParams: section,
        });
    },
    removeActiveSectionParams: () => {
        set({
            activeSectionParams: null,
        });
    },
}));

export const useMenuSettings = create((set, get) => ({
    status: "default",
    menuSettings: undefined,

    setMenuSettings: (menuSettings) => {
        set({
            status: "ready",
            menuSettings: menuSettings,
        });
    },
}));
