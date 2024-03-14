import React from 'react'

import cl from 'classnames';
import style from './index.module.scss';

const LeadSubpageHeader = ({className, lead}) => {
  return (
    <span className={cl(className, style.leadSubpageHeader)}>{lead}</span>
  )
}

export default LeadSubpageHeader