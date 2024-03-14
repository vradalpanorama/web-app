import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Title = ({className, title}) => {
  return (
    <div className={cl(className, style.title)}>{title}</div>
  )
}

export default Title