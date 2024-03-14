"use client";

import React, { useEffect, useState } from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    ContainerMain,
    ContainerNewsSecondary,
    NewsPreview,
} from "./components";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";

const ContentMain = ({ className }) => {
    const [
        status,
        activeList,
        countPreview,
    ] = useNewsFeedState((state) => [
        state.status,
        state.activeList,
        state.countPreview,
    ]);

    return (
        <ContainerMain>
            {status === "success" && (
                <>
                    <NewsPreview newsObj={activeList[0]} mainType />
                    <ContainerNewsSecondary>
                        {activeList
                            .slice(1, countPreview)
                            .map((news, key) => (
                                <NewsPreview
                                    key={key}
                                    newsObj={news}
                                    secondaryType
                                />
                            ))}
                    </ContainerNewsSecondary>
                </>
            )}
            {status !== "success" && <div>{status}</div>}
        </ContainerMain>
    );
};

export default ContentMain;
