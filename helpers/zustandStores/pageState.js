import { create } from "zustand";
import { fetchRequest } from "@/helpers/fetchRequest";

const usePageState = create((set, get) => ({
    status: "undefined",
    page: undefined,

    setDataPage: (data) => {
        set({
            status: "ready",
            page: data["_type"],
            ...data,
        });
    },
}));

export { usePageState };
