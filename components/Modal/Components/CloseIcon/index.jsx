"use client";

import cl from "classnames";
import style from "./index.module.scss";
import { Icon } from "@/components";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CloseIcon = () => {
    const href = usePathname();

    return (
        <Link href={href} scroll={false} className={style.close}>
            <Icon className={style.closeIcon} type={"close-icon"} />
        </Link>
    );
};

export default CloseIcon;
