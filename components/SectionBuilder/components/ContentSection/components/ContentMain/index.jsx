import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { ContainerMain, ContainerSecondary, PagePreview } from "./components";

const ContentMain = ({ className, pagesSection, icon, lang }) => {
    return (
        <ContainerMain>
            <PagePreview
                pageObj={pagesSection[0]}
                icon={icon}
                lang={lang}
                mainType
            />
            <ContainerSecondary>
                {pagesSection.slice(1).map((news, key) => (
                    <PagePreview
                        key={key}
                        pageObj={news}
                        icon={icon}
                        lang={lang}
                        secondaryType
                    />
                ))}
            </ContainerSecondary>
        </ContainerMain>
    );
};

export default ContentMain;
