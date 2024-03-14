import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ContainerSecondary = ({className, children}) => {
  return (
    <div className={cl(className, style.ContainerSecondary)}>{children}</div>
  )
}

export default ContainerSecondary