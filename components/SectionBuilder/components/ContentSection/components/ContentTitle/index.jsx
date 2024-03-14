
import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

import { ContainerTitle, Title } from "./components";

const ContentTitle = ({ className, title }) => {
    return (
        <ContainerTitle>
            <Title titleSection={title}/>
        </ContainerTitle>
    );
};

export default ContentTitle;
