
import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

import { ContainerTitle, FormatTabs, Title } from "./components";

const ContentTitle = ({ className, title }) => {
    return (
        <ContainerTitle>
            <Title titleForAllTab={title}/>
            <FormatTabs />
        </ContainerTitle>
    );
};

export default ContentTitle;
