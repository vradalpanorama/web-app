import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useModalState } from "@/helpers/zustandStores/modalState";

const ActionCloseModal = ({ className, children }) => {
    const [closeModal] = useModalState((state) => [state.closeModal]);

    return <div onClick={() => closeModal()}>{children}</div>;
};

export default ActionCloseModal;
