import { create } from "zustand";
import { fetchRequest } from "../fetchRequest";

const useNewsFeedState = create((set, get) => ({
    status: "undefined",
    activeTab: undefined,
    activeList: [],
    listAll: [],
    listNews: [],
    listEvents: [],
    countPreview: undefined,
    upcomingEvents: undefined,

    setNewsFeedState: (newsFeed) => {
        const { activeTab, countPreview } = newsFeed;
        set({
            countPreview,
        });

        if (activeTab === "all") {
            if (newsFeed.typeFormation === "manually") {
                const now = new Date();
                const expiresDate = new Date(newsFeed.manually.expiresDate);
                if (expiresDate > now) {
                    set({
                        status: "success",
                        listAll: newsFeed.manually.list,
                        activeList: newsFeed.manually.list,
                        activeTab,
                    });
                    return;
                }
            }
        }
        const { switchFormatTabs } = get();
        switchFormatTabs(activeTab);
    },

    loadList: async (listType) => {
        set({ status: "loading" });
        const { countPreview, upcomingEvents } = get();
        try {
            const response = await fetchRequest(
                `/api/news?activeTab=${listType}&numberStartNewsFeed=0&countPreview=${countPreview}${
                    upcomingEvents ? "" : "&upcomingEvents=get"
                }`
            );
            if (response.error) {
                set({
                    status: "error",
                });
            } else {
                set({
                    status: "success",
                });
                switch (listType) {
                    case "all":
                        set({
                            listAll: response.news,
                            activeList: response.news,
                        });
                        break;
                    case "news":
                        set({
                            listNews: response.news,
                            activeList: response.news,
                        });
                        break;
                    case "events":
                        set({
                            listEvents: response.news,
                            activeList: response.news,
                        });
                        break;
                }
                if (typeof response.upcomingEvents === 'number') {
                    set({
                        upcomingEvents: response.upcomingEvents,
                    });
                }
            }
        } catch (err) {
            set({
                status: "error",
            });
        }
    },

    switchFormatTabs: (formatTab) => {
        const { activeTab, listAll, listNews, listEvents, loadList } = get();

        if (activeTab !== formatTab) {
            set({
                status: "switch",
                activeTab: formatTab,
            });
            switch (formatTab) {
                case "all":
                    if (listAll?.lenght > 0) {
                        set({
                            status: "success",
                            activeList: listAll,
                        });
                    } else {
                        loadList(formatTab);
                    }
                    break;

                case "news":
                    if (listNews?.lenght > 0) {
                        set({
                            status: "success",
                            activeList: listNews,
                        });
                    } else {
                        loadList(formatTab);
                    }
                    break;

                case "events":
                    if (listEvents?.lenght > 0) {
                        set({
                            status: "success",
                            activeList: listEvents,
                        });
                    } else {
                        loadList(formatTab);
                    }
                    break;
            }
        }
    },

    showMore: (countPreviewNumber) => {
        const { countPreview } = get();
        set({
            countPreview: countPreview + countPreviewNumber,
        });
    },
}));

export { useNewsFeedState };
