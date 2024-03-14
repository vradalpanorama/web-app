import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Action = ({className, action}) => {
  return (
    <div className={cl(className, style.action)}>{action}</div>
  )
}

export default Action