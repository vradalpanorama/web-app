import React from 'react'


import cl from 'classnames'
import style from "./index.module.scss"

const GalleryContainer = ({ children, className }) => {
  return (
    <div className={cl(className, style.galleryContainer)}>{children}</div>
  )
}

export default GalleryContainer