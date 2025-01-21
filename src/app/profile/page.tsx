"use client";
import MainHeader from '@/components/MainHeader'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProfileUpdate from './ProfileUpdate';
import Loader from '@/components/mini/Loader';

export interface UserType {
    first_name: string, last_name: string, email: string, mobileNumber: string, address: {
        address1: string, address2: string, city: string, postal_code: string, country: string
    },
    _id: string, password: string
}

const Profile = () => {
    const [data, setData] = useState<UserType>()
    const router = useRouter();
    const [error, setError] = useState(false);
    const getData = async () => {
        try {
            const res = await fetch(`/api/user`);
            const data = await res.json();
            if (res.status == 401) {
                router.push('/login');
            }
            if (res.ok) {
                setData(data.userdata[0])
            }
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            {!data && !error && (
                <Loader />
            )}
            {data && <div className='w-full'>
                <MainHeader title={"Hi " + data.first_name || data.email } prev='Home . Pages . ' current='Profile' />
                <div className='lg:px-40 md:px-10 px-5 lg:py-10 py-5'>
                    <h3 className='text-black font-josefin-sans lg:text-4xl md:text-3xl text-2xl font-bold text-center'>Your Profile</h3>
                    <ProfileUpdate userdata={data} />
                </div>
            </div>}
            {error && (
                <div className="w-full p-20">
                    <h3>Failed to Load Profile Please Try Later!</h3>
                </div>
            )}

        </>
    )
}

export default Profile
