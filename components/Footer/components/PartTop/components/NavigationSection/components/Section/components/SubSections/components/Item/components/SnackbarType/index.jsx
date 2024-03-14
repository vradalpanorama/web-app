"use client";
import React, { useEffect } from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { useCopyToClipboard } from "@/hooks";
import { useSnackbarState } from "@/helpers/zustandStores/snackbarState";

const SnackbarType = ({ className, page }) => {
    const [copiedText, copyFn] = useCopyToClipboard();
    const [status, showSnackbar] = useSnackbarState((state) => [state.status, state.showSnackbar]);
    const { sectionName, copyToClipboard, snackbar } = page;

    // useEffect(() => {
    //     console.log(status, copiedText, showSnackbar, snackbar);
    //     if (copiedText || status) {
    //         showSnackbar({
    //             status: "footer",
    //             description: snackbar["description"],
    //             iconType: snackbar["icon-type"],
    //             action: snackbar["action"],
    //         });
    //     }
    // }, [status, copiedText, showSnackbar, snackbar]);

    return (
        <span
            className={cl(className, style.snackbar)}
            onClick={() => {
                copyFn(copyToClipboard);
                showSnackbar({
                    status: "footer",
                    description: [snackbar["description"], copyToClipboard],
                    iconType: snackbar["icon-type"],
                    action: snackbar["action"],
                })
            }}
        >
            {sectionName}
        </span>
    );
};

export default SnackbarType;
