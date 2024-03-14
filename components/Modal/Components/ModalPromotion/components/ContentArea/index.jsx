import React, { Fragment } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";
import { Container, Error, List, Loading } from "./components";


const contentComponents = {
    default: Fragment,
    loading: Loading,
    error: Error,
    success: {
        list: List,
    },
};

const ContentArea = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);

    const contentType = promotionData?.content?.type;
    const Content =
        status === "success"
            ? contentComponents[status][contentType]
            : contentComponents[status];

    return (
        <Container
            className={
                status === "error"
                    ? style.containerError
                    : style.containerContent
            }
        >
            <Content />
        </Container>
    );
};



export default ContentArea;
