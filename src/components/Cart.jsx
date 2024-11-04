import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='border border-black p-5 grid grid-cols-6'>
      <div className='col-span-1'>
        <img src={cart.product.image} className='h-16'/>
      </div>
      <div className='col-span-3'>
        <p className='mb-2 line-clamp-2'>{cart.product.title}</p>
        <p className='text-gray-500'>{cart.product.price}</p>
      </div>
      <div className='col-span-1'>
        <p className='text-gray-500'>Quantity</p>
        <div className='flex gap-2 '>
            <button className='bg-black text-white py-0.5 px-1 '>-</button>
            <p className='text-center'> {cart.quantity}</p>
            <button className='bg-black text-white px-1 py-0.5 '>+</button>
        </div>
       
      </div>
      <div className='col-span-1'>
       <p className='text-end text-2xl font-bold mt-4'> {cart.cost}</p>
      </div>
        
    </div>
  )
}

export default Cart