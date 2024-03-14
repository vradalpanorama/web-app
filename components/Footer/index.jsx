import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

import {
    Container,
    Content,
    MountainsHeader,
    PartBottom,
    PartTop,
} from "./components";
import { Snackbar } from "@/components";

const Footer = ({footerSettings}) => {
    const {navigation} = footerSettings
    return (
        <Container>
            <MountainsHeader />
            <Content>
                <PartTop navigation={navigation}/>
                <PartBottom />
            </Content>
            <Snackbar
                classNameInit={style.snackbarInit}
                classNameShow={style.snackbarShow}
            />
        </Container>
    );
};

export default Footer;
