import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Action, Content, PlaceholderIcon, Pod } from "./components";
import { useToastModalState } from "@/helpers/zustandStores/modalState";

const Toast = () => {
    const [status, label, title, lead, action] = useToastModalState((state) => [
        state.status,
        state.lable,
        state.title,
        state.lead,
        state.action,
    ]);
    return (
        <Pod className={cl(status === "show" ? style.showToast : null)}>
            <PlaceholderIcon iconType={label ?? "toast-link"} label />
            <Content
                title={title ?? "Copied phone number to keyboard"}
                lead={lead ?? "Open on app"}
            />
            {/* <PlaceholderIcon iconType={action ?? "close-icon"} action /> */}
        </Pod>
    );
};

export default Toast;
