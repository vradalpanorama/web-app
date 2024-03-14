"use client";

import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

import { Badge } from "./components";
import { useGetLang } from "@/hooks";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";

const tabNames = {
    all: { en: "All", no: "Alle" },
    news: { en: "News", no: "Nyhet" },
    events: { en: "Events", no: "Hendelser" },
};

const FormatTabs = () => {
    const lang = useGetLang();
    const [activeTab, upcomingEvents, switchFormatTabs] = useNewsFeedState(
        (state) => [
            state.activeTab,
            state.upcomingEvents,
            state.switchFormatTabs,
        ]
    );

    return (
        <div className={style.tabsContainer}>
            <div
                className={cl(
                    style.formatTab,
                    activeTab === "all" ? style.formatTabActive : null
                )}
                onClick={() => switchFormatTabs("all")}
            >
                {tabNames["all"][lang]}
            </div>

            <div
                className={cl(
                    style.formatTab,
                    activeTab === "news" ? style.formatTabActive : null
                )}
                onClick={() => switchFormatTabs("news")}
            >
                {tabNames["news"][lang]}
            </div>

            <div
                className={cl(
                    style.formatTab,
                    style.formatTabEvents,
                    activeTab === "events" ? style.formatTabActive : null
                )}
                onClick={() => switchFormatTabs("events")}
            >
                {tabNames["events"][lang]}
                {upcomingEvents > 0 && (
                    <Badge
                        className={style.badgeContainer}
                        count={upcomingEvents}
                    />
                )}
            </div>
        </div>
    );
};

export default FormatTabs;
