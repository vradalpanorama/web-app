import React from "react";
import { Item, List, LocaleSwitcher, SideBarSwitcher } from "./components";

const HeaderControl = () => {
    return (
        <List>
            <Item>
                <LocaleSwitcher />
            </Item>
            <Item>
                <SideBarSwitcher />
            </Item>
        </List>
    );
};

export default HeaderControl;
