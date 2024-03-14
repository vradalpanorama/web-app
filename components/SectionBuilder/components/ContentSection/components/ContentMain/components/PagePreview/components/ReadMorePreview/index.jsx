import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

import { ContainerReadMorePreview, ReadMore } from "./components";
import { Icon } from "@/components";

const readMoreDict = {
    en: "Read more",
    no: "Les mer",
};

const ReadMorePreview = ({ lang, previewType }) => {
    return (
        <ContainerReadMorePreview previewType={previewType}>
            <ReadMore readMore={readMoreDict[lang]} />
            <Icon type={"arrow"} className={style.arrow} />
        </ContainerReadMorePreview>
    );
};

export default ReadMorePreview;
