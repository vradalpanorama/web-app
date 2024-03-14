"use client";

import cl from "classnames";
import style from "./index.module.scss";
import { useModalState } from "@/helpers/zustandStores/modalState";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BackgroundArea = () => {
    const [closeModal] = useModalState((state) => [state.closeModal]);
    const href = usePathname();
    return (
        <Link
            href={href}
            scroll={false}
            className={style.backgroundArea}
        ></Link>
    );
};

export default BackgroundArea;
