import { create } from "zustand";

const useSnackbarState = create((set, get) => ({
    status: undefined,
    description: null,
    action: null,
    iconType: null,
    duration: 5000,
    timeoutId: null,

    showSnackbar: (snackbarData) => {
        const { status, showSnackbar, resetSnackbar, hideSnackbar , timeoutId } = get();
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (status) {
            set({ status: undefined });
            const newTimeoutId = setTimeout(() => {
                resetSnackbar();
                setTimeout(() => {
                    showSnackbar(snackbarData);
                }, 50);
            }, 300);
            set({ timeoutId: newTimeoutId });
        } else {
            set({ ...snackbarData });
            const newTimeoutId = setTimeout(() => {
                hideSnackbar();
            }, 8500);
            set({ timeoutId: newTimeoutId });
        }
    },

    hideSnackbar: () => {
        const { timeoutId, resetSnackbar } = get();
        clearTimeout(timeoutId);
        set({
            status: undefined,
        });
        const newTimeoutId = setTimeout(() => {
            resetSnackbar();
        }, 500);
        set({ timeoutId: newTimeoutId });
    },

    resetSnackbar: () => {
        set({
            description: null,
            iconType: null,
            action: null,
            timeoutId: null,
        });
    },
}));

export { useSnackbarState };
