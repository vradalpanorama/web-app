"use client";

import React from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { useSnackbarState } from "@/helpers/zustandStores/snackbarState";

const Container = ({ className, children }) => {
    const [statusSnackbar, hideSnackbar] = useSnackbarState((state) => [
        state.status,
        state.hideSnackbar,
    ]);
    return (
        <footer
            onClick={statusSnackbar ? () => hideSnackbar() : null}
            className={cl(className, style.container)}
        >
            {children}
        </footer>
    );
};

export default Container;
