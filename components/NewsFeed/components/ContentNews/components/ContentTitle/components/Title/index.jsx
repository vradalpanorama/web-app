"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useGetLang } from "@/hooks";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";

const Title = ({ className, titleForAllTab }) => {
    const [title, setTitle] = useState();
    const lang = useGetLang();
    const [activeTab, upcomingEvents] = useNewsFeedState((state) => [
        state.activeTab,
        state.upcomingEvents,
    ]);

    useEffect(() => {
        switch (activeTab) {
            case "all":
                setTitle(titleForAllTab[lang]);
                break;
            case "news":
                setTitle(lang === "en" ? "All the news" : "Alle nyheter");
                break;
            case "events":
                if (upcomingEvents) {
                    if (upcomingEvents < 1) {
                        setTitle(
                            lang === "en"
                                ? `${upcomingEvents} upcoming events`
                                : `${upcomingEvents} kommende hendelser`
                        );
                    } else {
                        setTitle(
                            lang === "en"
                                ? `${upcomingEvents} upcoming event`
                                : `${upcomingEvents} kommende hendelser`
                        );
                    }
                } else {
                    setTitle(lang === "en" ? "All events" : "Alle hendelser");
                }
                break;
        }
    }, [activeTab, lang, upcomingEvents, titleForAllTab]);

    return <span className={cl(className, style.title)}>{title}</span>;
};

export default Title;
