import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ContainerNewsSecondary = ({className, children}) => {
  return (
    <div className={cl(className, style.containerNewsSecondary)}>{children}</div>
  )
}

export default ContainerNewsSecondary