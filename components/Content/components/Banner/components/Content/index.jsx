import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const Content = ({className, height, children}) => {
  return (
    <div className={cl(className, style.content)} style={{height: height}}>{children}</div>
  )
}

export default Content