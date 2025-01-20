import MainHeader from '@/components/MainHeader'
import React from 'react'
import CartProducts from './CartProducts'
import CheckoutForm from './CheckoutForm'

const Payment = () => {
    return (
        <div className='w-full'>
            <MainHeader title='Checkout' current='Payment' prev='Home . Pages . Checkout . ' />
            <div className='w-full px-2 lg:px-40 py-20 grid grid-cols-4 lg:grid-cols-6'>
                <CheckoutForm />

                <CartProducts />
            </div>
        </div>
    )
}

export default Payment
