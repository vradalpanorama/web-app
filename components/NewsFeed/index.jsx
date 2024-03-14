"use client";

import React, { useEffect } from "react";
import cl from "classnames";
import style from "./index.module.scss";

import {
    ContainerSection,
    MountainsBottom,
    MountainsTop,
    ContentNews,
} from "./components";
import { useNewsFeedState } from "@/helpers/zustandStores/newsFeedState";

const NewsFeed = ({ newsFeed }) => {
    const { content } = newsFeed['newsFeed'];

    const [status, setNewsFeedState] = useNewsFeedState(
        (state) => [state.status, state.setNewsFeedState]
    );

    useEffect(() => {
        if (status === "undefined") {
            setNewsFeedState(newsFeed['newsFeed']);
        }
    }, [newsFeed, setNewsFeedState, status]);

    return (
        <ContainerSection>
            <MountainsTop />
            <ContentNews content={content} />
            <MountainsBottom />
        </ContainerSection>
    );
};

export default NewsFeed;
