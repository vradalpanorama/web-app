import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Placeholder = ({className}) => {
  return (
    <div className={cl(className, style.placeholder)} />
  )
}

export default Placeholder