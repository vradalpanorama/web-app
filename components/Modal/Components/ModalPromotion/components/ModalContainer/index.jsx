import React, { useEffect, useRef } from "react";

import cl from "classnames";
import style from "./index.module.scss";

const ModalContainer = ({ className, children }) => {
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div ref={ref} className={style.scroll}>
            <div className={style.container}>{children}</div>
        </div>
    );
};

export default ModalContainer;
