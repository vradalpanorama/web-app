import React from 'react'

import cl from 'classnames';
import style from './index.module.scss'

const ElementBottomPart = ({className, children}) => {
  return (
    <div className={cl(className, style.bottomPart)}>{children}</div>
  )
}

export default ElementBottomPart