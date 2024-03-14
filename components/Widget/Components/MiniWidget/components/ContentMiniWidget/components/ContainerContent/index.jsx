import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ContainerContent = ({className, children}) => {
  return (
    <div className={cl(className, style.containerContent)}>{children}</div>
  )
}

export default ContainerContent