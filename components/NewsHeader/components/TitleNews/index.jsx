import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const TitleNews = ({className, title}) => {
  return (
    <h1 className={cl(className, style.titleNews)}>{title}</h1>
  )
}

export default TitleNews