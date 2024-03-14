import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Container = ({className, children}) => {
  return (
    <li className={cl(className, style.container)}>
        {children}
    </li>
  )
}

export default Container