import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ImgContainer = ({className, children}) => {
  return (
    <div className={cl(className, style.imgContainer)}>{children}</div>
  )
}

export default ImgContainer