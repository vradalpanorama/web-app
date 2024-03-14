"use client";

import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { ActionText, Container } from "./components";
import { Icon } from "@/components";
import { useCoverState } from "@/helpers/zustandStores/coverState";

const Action = ({ className, lead, action }) => {
    const [imageCoverLoad, contentOnHover] = useCoverState((state) => [
        state.imageCoverLoad,
        state.contentOnHover,
    ]);

    const isAction = [
        "modal",
        "news",
        "page",
        "section",
        "externalLink",
    ].includes(action?._type);
    return (
        <Container isAction={isAction}>
            <ActionText text={lead} />
            {isAction && (
                <Icon
                    type={"arrow"}
                    className={cl(
                        style.icon,
                        imageCoverLoad ? style.iconAttention : null,
                        contentOnHover ? style.iconAttentionOnHover : null
                    )}
                />
            )}
        </Container>
    );
};

export default Action;
