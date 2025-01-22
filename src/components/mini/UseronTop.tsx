"use client";
import useUser from '@/store/userStore';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { BiUser } from 'react-icons/bi';

const UseronTop = () => {
    const {isLoggedIn, user, getUser} = useUser();
    const isActive = isLoggedIn();
    useEffect(() => {
        if(!isActive){
            getUser();
        }
    }, [user]);
  return (
    <>
        {user === null && <Link href={"/login"} className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Account <BiUser color={'white'} /></Link>}
        {user !== null && <Link href={"/profile"} className='bg-transparent text-white border-none outline-none font-semibold font-josefin-sans flex items-center gap-1'>Hi {user.first_name} - Profile</Link>}
    </>
  )
}

export default UseronTop
