import React from 'react'

const Button = ({
  children,
  size = "sm",
  className = "",
}) => {
  return (
    <button
      className={`btn btn-${size} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
