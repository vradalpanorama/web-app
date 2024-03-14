import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const SvgContainer = ({className, children}) => {
  return (
    <div className={cl(className, style.svgContainer)}>{children}</div>
  )
}

export default SvgContainer