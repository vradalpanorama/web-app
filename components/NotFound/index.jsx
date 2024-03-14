import React from 'react'

import cl from "classnames"; 
import style from "./index.module.scss"

const NotFound = ({ children, className }) => {
  return (
    <div className={cl(className, style.notFound)}>{children}</div>
  )
}

export default NotFound