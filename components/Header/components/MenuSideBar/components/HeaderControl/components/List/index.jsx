import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const List = ({className, children}) => {
  return (
    <ul className={cl(className, style.listNav)}>{children}</ul>
  )
}

export default List