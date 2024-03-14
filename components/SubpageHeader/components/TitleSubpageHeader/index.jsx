import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const TitleSubpageHeader = ({className, title}) => {
  return (
    <h1 className={cl(className, style.titleSubpageHeader)}>{title}</h1>
  )
}

export default TitleSubpageHeader