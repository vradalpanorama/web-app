import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Title = ({className, title}) => {
  return (
    <h3 className={cl(className, style.title)}>{title}</h3>
  )
}

export default Title