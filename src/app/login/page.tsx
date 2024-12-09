import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full'>
      <MainHeader title='My Account' prev='Home . Pages . ' current='My Account' />
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col shadow-sm shadow-gray-500 rounded-md p-10 md:w-[545px] my-28'>
            <div>

            <h3 className='text-black font-josefin-sans text-4xl font-bold text-center'>Login</h3>
            <p className='text-gray-400 text-center font-lato'>Please login using account detail bellow.</p>
            </div>
            <input type="text" className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3' placeholder='Email Address' />
            <input type="password" className='bg-transparent my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3' placeholder='Password' />
            <p className='text-gray-400 text-left font-lato'>Forgot your password?</p>
            <button className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3 text-xl my-4'>Sign In</button>
            <p className='text-gray-400 text-center mt-5 font-lato'>Don&apos;t have account? Create One</p>

        </div>
      </div>
      <Companies />
    </div>
  )
}

export default Login
