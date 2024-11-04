import React from 'react'

const Container = ({children ,className}) => {
  return (
    <div className={`w-full md:w-[540px] lg:w-[720px]  xl:w-[1200px]  mx-auto ${className}`}>{children}</div>
  )
}

export default Container