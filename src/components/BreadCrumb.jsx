import React from 'react'

const BreadCrumb = ({currentTitle}) => {
  return (
    <div className='w-full flex gap-3 mb-5'>
        <Link to={'/'} className='text-gray-400'>Home</Link>
        <span>/</span>
        <p>{currentTitle}</p>
    </div>
  )
}

export default BreadCrumb