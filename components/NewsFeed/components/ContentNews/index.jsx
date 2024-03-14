import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import {
    ContainerContentNews,
    ContentBottom,
    ContentMain,
    ContentTitle,
} from "./components";

const ContentNews = ({ className, content }) => {
    const { title, bottom } = content;
    return (
        <ContainerContentNews>
            <ContentTitle title={title} />
            <ContentMain />
            {/* <ContentBottom bottom={bottom} /> */}
        </ContainerContentNews>
    );
};

export default ContentNews;
