import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const TextContent = ({className, children}) => {
  return (
    <div className={cl(className, style.textContent)} >{children}</div>
  )
}

export default TextContent