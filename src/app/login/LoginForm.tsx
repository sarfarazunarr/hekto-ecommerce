"use client";
import React,  { useState } from 'react'
import { toast } from 'react-toastify'
import {useRouter} from 'next/navigation'
const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
      })
      const router = useRouter();
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value});
      }
      const onLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const logintoast = toast.loading('Logging in...')
        try {
          if(data.email.length <= 0 || data.password.length <= 0){
            toast.update(logintoast, {render: "Email or Password is Missing!", autoClose: 3000, type: "error", isLoading: false});
              return;
          }
          const res = await fetch(`/api/user`, {method: "POST", body: JSON.stringify(data)});
          const resdata = await res.json();
          if(res.status == 400){
            toast.update(logintoast, {render: resdata.message, autoClose: 3000, type: "error", isLoading: false});
            return;
          }
          if(res.ok){
            console.log(resdata);
            toast.update(logintoast, {render: resdata.message, autoClose: 3000, type: "success", isLoading: false});
            router.push('/profile')
          }
        } catch (error) {
            console.log(error);
            toast.update(logintoast, {render: "Failed to Login Please Try Later!", autoClose: 3000, type: "error", isLoading: false});
        }
      }
  return (
    <form onSubmit={onLogin}>
    <input type="email" className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3' placeholder='Email Address' name='email' value={data.email} onChange={onChange} required />
    <input type="password" className='bg-transparent my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3' placeholder='Password' name='password' value={data.password} onChange={onChange} />
    <p className='text-gray-400 text-left font-lato'>Forgot your password?</p>
    <button type='submit' className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3 text-xl my-4'>Sign In</button>
    </form>
  )
}

export default LoginForm
