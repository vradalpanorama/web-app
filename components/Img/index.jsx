import Image from "next/image";
import React from "react";

import cl from "classnames";
import style from "./index.module.scss";

const Img = ({ img, alt, className }) => {
    return (
    <Image 
        src={img} 
        width={img.width}
        height={img.height}
        alt={alt} 
        className={cl(
            className, 
            style.img
        )} 
    />);
};

export default Img;
