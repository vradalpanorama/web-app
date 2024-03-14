import React, { useEffect } from "react";
import cl from "classnames";
import style from "./index.module.scss";
import { Appearance, Icon } from "@/components";
import { useToastModalState } from "@/helpers/zustandStores/modalState";

const PlaceholderIcon = ({ className, iconType, label, action }) => {
    const [hideToast, currentAction] = useToastModalState((state) => [
        state.hideToast,
        state.currentAction,
    ]);
    const closeToastFunction = () => {
        if (action) {
            hideToast();
        }
    };

    return (
        <div
            className={cl(
                className,
                style.placeholder,
                label ? style.placeholderLabel : null,
                action ? style.placeholderAction : null
            )}
            onClick={() => closeToastFunction()}
        >
            <Icon
                type={iconType}
                className={cl(
                    style.icon,
                    label ? style.iconLabel : null,
                    action ? style.iconAction : null,
                    action && currentAction ? style.iconActionAppearance : null
                )}
            />
        </div>
    );
};

export default PlaceholderIcon;
