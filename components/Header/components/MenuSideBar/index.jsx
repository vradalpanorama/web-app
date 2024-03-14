import React, { useEffect } from "react";
import { Container, Content, HeaderControl, SideBar } from "./components";


const MenuSideBar = ({menuSettings}) => {
    return (
        <Container>
            <Content>
                <SideBar />
            </Content>
            <HeaderControl />
        </Container>
    );
};

export default MenuSideBar;
