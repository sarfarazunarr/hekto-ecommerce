import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {

  return (
    <div className='w-full'>
      <MainHeader title='My Account' prev='Home . Pages . ' current='My Account' />
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col shadow-sm shadow-gray-500 rounded-md p-10 md:w-[545px] my-28'>
          <div>
            <h3 className='text-black font-josefin-sans text-4xl font-bold text-center'>Your Account</h3>
            <p className='text-gray-400 text-center font-lato'>Enter Email and Password to continue. We will create new one if you don&apos;t have!</p>
          </div>
          <LoginForm />

        </div>
      </div>
      <Companies />
    </div>
  )
}

export default Login
