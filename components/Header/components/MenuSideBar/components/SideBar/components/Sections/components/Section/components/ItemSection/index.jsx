import React from 'react'
import cl from 'classnames';
import style from './index.module.scss';
const ItemSection = ({className, children}) => {
  return (
    <li className={cl(className, style.item)}>{children}</li>
  )
}

export default ItemSection