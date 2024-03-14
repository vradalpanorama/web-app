import React from "react";

import {
    ContainerHeaderPreview,
    DateNews,
    TitleNews,
    TypeNews,
} from "./components";

const HeaderPreview = ({ typePub, newsType, datePub, title, lang }) => {
    return (
        <ContainerHeaderPreview newsType={newsType}>
            <TypeNews type={typePub} />
            <TitleNews title={title} newsType={newsType} />
            <DateNews datePub={datePub} lang={lang} typePub={typePub} />
        </ContainerHeaderPreview>
    );
};

export default HeaderPreview;
