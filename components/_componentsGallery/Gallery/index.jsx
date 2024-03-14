import React from 'react'

import cl from 'classnames'
import style from "./index.module.scss"

const Gallery = ({ children, className }) => {
  return (
    <div className={cl(className, style.gallery)}>Gallery</div>
  )
}

export default Gallery