import React from 'react'


const Footer = () => {
    const date = new Date().getFullYear()
  return (
    
    <footer className='mt-auto mx-5 text-white text-center py-2 bg-black'>
       {date} <a href="https://mms-it.com">MMS IT.All rights reserved.</a>  
    </footer>
  )
}

export default Footer