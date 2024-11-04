import React from 'react'
import Cart from './Cart'
import products from '../data/products'
import { Link } from 'react-router-dom'
import carts from '../data/carts'

const CartSection = () => {
   
  return (
   <>
   <div className='flex flex-col gap-5 h-full'>
   {carts.map((cart) => (
    <Cart key={cart.id} cart={cart} />
   ))}
   </div>
   <div className='border-t border-black bg-white mt-60  w-full py-3 '>
    <div className='flex justify-end gap-10'>
        <div className='text-right'>
            <p className='text-gray-500'>Total</p>
            <p className='font-bold'>123</p>
        </div>
        <div className='text-right'>
        <p  className='text-gray-500'>Tex(10%)</p>
        <p className='font-bold'>123</p>
        </div>
        <div className='text-right'>
        <p  className='text-gray-500'>Net Total</p>
        <p className='font-bold'>123</p>
        </div>
    </div>
    <div className='text-end mt-4'>
    <Link to={"/faq"} className='border border-black px-5 py-2 '>Order Now</Link>

    </div>
   </div>
   </>
    
    
  )
}

export default CartSection