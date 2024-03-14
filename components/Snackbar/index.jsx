"use client";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import { Appearance, Icon } from "@/components";
import {
    Action,
    Container,
    ContentArea,
    Description,
    PlaceholderIcon,
} from "./components";

import { useSnackbarState } from "@/helpers/zustandStores/snackbarState";

const Snackbar = ({ classNameInit, classNameShow }) => {
    const [status, description, action, iconType] = useSnackbarState(
        (state) => [
            state.status,
            state.description,
            state.action,
            state.iconType,
        ]
    );

    return (
        <Container
            className={cl(
                classNameInit,
                status === undefined ? null : classNameShow
            )}
        >
            <PlaceholderIcon>
                {iconType && (
                    <Appearance snackbarIcon animationDuration="0.8s">
                        <Icon className={style.icon} type={iconType} />
                    </Appearance>
                )}
            </PlaceholderIcon>

            <ContentArea>
                {description && <Description description={description} />}
                {action && <Action action={action} />}
            </ContentArea>
        </Container>
    );
};

export default Snackbar;
