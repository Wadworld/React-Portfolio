import React from 'react'

const BtnArrow = ({
  children,
  size = "sm",
  className = "",
}) => {
  return (
    <button
      className={`btnArrow btn-${size} ${className}`}
    >
      {children}
    </button>
  )
}

export default BtnArrow
