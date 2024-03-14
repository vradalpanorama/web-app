import React from "react";
import cl from "classnames";
import style from "./index.module.scss";

const Appearance = ({
    className,
    children,
    animationDuration = ".5s",
    animationDelay = "0",
    widget,
    modal,
    menuDesktop,
    menuSideBar,
    snackbarIcon,
}) => {
    return (
        <div
            style={{ animationDuration: animationDuration, animationDelay: animationDelay}}
            className={cl(
                className,
                widget ? style.appearanceWidget : null,
                modal ? style.appearanceModal : null,
                menuDesktop ? style.appearanceMenuDesktop : null,
                menuSideBar ? style.appearanceMenuSideBar : null,
                snackbarIcon ? style.appearanceSnackbarIcon : null
            )}
        >
            {children}
        </div>
    );
};

export default Appearance;
