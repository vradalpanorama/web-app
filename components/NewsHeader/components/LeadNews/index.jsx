import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const LeadNews = ({className, lead}) => {
  return (
    <span className={cl(className, style.leadNews)}>{lead}</span>
  )
}

export default LeadNews