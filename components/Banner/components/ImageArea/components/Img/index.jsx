import Image from "next/image";
import React from "react";

import cl from 'classnames';
import style from './index.module.scss';

const Img = ({ className, src, alt }) => {
    return <Image className={cl(className, style.img)} src={src} alt={alt} />;
};

export default Img;
