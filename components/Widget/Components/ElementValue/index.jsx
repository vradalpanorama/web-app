import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const ElementValue = ({value, unit}) => {
  return (
    <div className={style.value}>
        <span className={style.valueNumber}>{value}</span>
        <span className={style.valueUnit}>{unit}</span>
    </div>
  )
}

export default ElementValue