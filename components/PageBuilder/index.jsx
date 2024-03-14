import React from "react";
import { Content, Cover, SubpageHeader } from "@/components";

import cl from "classnames";
import style from "./index.module.scss";

const PageBuilder = ({ page, lang }) => {
    return (
        <>
            {page["header"]["typeHeaderPage"] === "headerWithImage" && (
                <SubpageHeader
                    subpageHeader={page["header"]["headerWithImage"]}
                    lang={lang}
                />
            )}
            {page["header"]["typeHeaderPage"] === "cover" && (
                <Cover cover={page["header"]["cover"]} lang={lang} />
            )}
            <Content
                // className={style.contentPage}
                body={page["content"][lang]["body"]}
            />
        </>
    );
};

export default PageBuilder;
