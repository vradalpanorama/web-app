import React from "react";

import {
    ContainerHeaderPreview,
    TitlePreview,
    TypePreview,
} from "./components";

const HeaderPreview = ({ typePage, previewType, title, lang }) => {
    return (
        <ContainerHeaderPreview previewType={previewType}>
            <TypePreview type={typePage} lang={lang}/>
            <TitlePreview title={title} previewType={previewType} />
        </ContainerHeaderPreview>
    );
};

export default HeaderPreview;
