"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Button } from "@/components";
import { useGetLang } from "@/hooks";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";
import { useRouter } from "next/navigation";

const ButtonPagination = ({ className, onNewsPage, buttonTitle }) => {
    const lang = useGetLang();
    const router = useRouter();
    const [activeTab, listAll, listNews, listEvents, countPreview, showMore] =
        useNewsFeedState((state) => [
            state.activeTab,
            state.listAll,
            state.listNews,
            state.listEvents,
            state.countPreview,
            state.showMore,
        ]);
    const moreNewsFn = () => {
        showMore(3);
    };

    const listNewsFeed =
        activeTab === "all"
            ? listAll
            : activeTab === "news"
            ? listNews
            : activeTab === "events"
            ? listEvents
            : null;

    const isDisabled = listNewsFeed?.length <= countPreview;
    const buttonNameOnNewsPage = {
        en: `${isDisabled ? "No" : "Show"} ${buttonTitle.en}`,
        no: `${isDisabled ? "Ingen" : "Vis"} ${buttonTitle.no}`,
    };
    const buttonNameOnMainPage = {
        en: `Show ${buttonTitle.en}`,
        no: `Vis ${buttonTitle.no}`,
    };
    return (
        <>
            {onNewsPage && (
                <Button
                    onClick={moreNewsFn}
                    className={style.buttonPagination}
                    disabled={isDisabled}
                >
                    <span className={style.buttonName}>{buttonNameOnNewsPage[lang]}</span>
                </Button>
            )}
            {!onNewsPage && (
                <Button
                    onClick={() =>
                        router.push(lang === "no" ? "/news" : "/en/news")
                    }
                    className={style.buttonPagination}
                >
                    <span className={style.buttonName}>{buttonNameOnMainPage[lang]}</span>
                </Button>
            )}
        </>
    );
};

export default ButtonPagination;
