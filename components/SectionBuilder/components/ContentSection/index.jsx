import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Container, ContentMain, ContentTitle } from "./components";

const ContentSection = ({ className, section, lang }) => {
    const { icon, pagesSection, title } = section;
    return (
        <Container>
            <ContentTitle title={title[lang]} />
            <ContentMain pagesSection={pagesSection} icon={icon} lang={lang} />
        </Container>
    );
};

export default ContentSection;
