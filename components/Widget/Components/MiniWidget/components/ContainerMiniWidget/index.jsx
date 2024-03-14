import React from "react";

import cl from "classnames";
import style from "./index.module.scss";
import { Appearance } from "@/components";
import { useWidgetState } from "@/helpers/zustandStores/widgetState";

const ContainerMiniWidget = ({ className, children }) => {
    const { fixedPosition } = useWidgetState((state) => state);
    return (
        <Appearance
            className={cl(
                className,
                style.containerMiniWidget,
                fixedPosition ? null : style.containerMiniWidgetFixed
            )}
            widget
        >
            {children}
        </Appearance>
    );
};

export default ContainerMiniWidget;
