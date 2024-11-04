import React from 'react'
import Container from '../components/Container'
import FaqSection from '../components/FaqSection'
import BreadCrumb from '../components/BreadCrumb'
// import FaqBox from '../components/FaqBox'

const FaqPage = () => {
  return (
    <div className='p-5'>
        <Container>
            <BreadCrumb currentTitle="faq" />
            <FaqSection />
        </Container>
    </div>
  )
}

export default FaqPage