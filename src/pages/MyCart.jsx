import React from 'react'
import Container from '../components/Container'

import CartSection from '../components/CartSection'
import BreadCrumb from '../components/BreadCrumb'

const MyCart = () => {
  return (
    <div className='p-5'>
      <Container className="">
      <BreadCrumb currentTitle="My Cart" />
      <CartSection />
    </Container>
    </div>
  )
}

export default MyCart