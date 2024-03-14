import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Content, NewsHeader } from "@/components";

const NewsBuilder = ({ news, lang }) => {
    return (
        <>
            <NewsHeader newsObj={news} />
            <Content
                // className={style.newsContent}
                body={news["content"][lang]["body"]}
            />
        </>
    );
};

export default NewsBuilder;
