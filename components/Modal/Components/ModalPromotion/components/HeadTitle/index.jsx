import React, { Fragment } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { usePromotionModalState } from "@/helpers/zustandStores/modalState";
import { Container, Lead, Title } from "./components";

const statusClassName = {
    loading: style.loading,
    error: style.error,
    success: style.success,
};

const HeadTitle = () => {
    const [status, promotionData] = usePromotionModalState((state) => [
        state.status,
        state.promotionData,
    ]);
    const titleLines = promotionData?.title;
    const leadLines = promotionData?.lead;
    return (
        <>
            {titleLines && (
                <Container title>
                    {titleLines.map((title, key) => (
                        <Title
                            key={key}
                            title={title}
                            className={statusClassName[status]}
                        />
                    ))}
                </Container>
            )}
            {leadLines && (
                <Container lead>
                    {leadLines.map((lead, key) => (
                        <Lead
                            key={key}
                            lead={lead}
                            // className={statusClassName[status]}
                        />
                    ))}
                </Container>
            )}
        </>
    );
};

export default HeadTitle;
