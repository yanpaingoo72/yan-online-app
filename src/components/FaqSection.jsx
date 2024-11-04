import React from 'react'
import FaqBox from './FaqBox';
import reactQuestions from '../data/questions';

const FaqSection = () => {
      
  return (
    <>
      <div className='flex flex-col'>  
        {reactQuestions.map((question) => (
          <FaqBox key={question.id} faq={question} />   
        ))}
        </div>
    
    </>
  )
}

export default FaqSection;