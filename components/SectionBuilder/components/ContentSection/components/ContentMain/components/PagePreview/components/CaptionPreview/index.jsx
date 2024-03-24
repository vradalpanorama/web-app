import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

import { ContainerCaptionPreview, Caption } from "./components";
import { Icon } from "@/components";

const CaptionPreview = ({ lang, previewType, typePage }) => {
    return (
        <ContainerCaptionPreview previewType={previewType}>
            <Caption type={typePage} lang={lang} />
            <Icon
                type={"arrow"}
                className={cl(
                    style.arrow,
                    typePage === "externalLink" ? style.arrowLink : null
                )}
            />
        </ContainerCaptionPreview>
    );
};

export default CaptionPreview;
