import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ReadMore = ({className, readMore}) => {
  return (
    <div className={cl(className, style.readMore)}>{readMore}</div>
  )
}

export default ReadMore