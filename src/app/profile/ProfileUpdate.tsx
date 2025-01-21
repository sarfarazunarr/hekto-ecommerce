"use client";
import React, { useEffect, useState } from 'react';
import { UserType } from './page';
import { toast } from 'react-toastify';

const ProfileUpdate = ({ userdata }: { userdata: UserType }) => {

    const [data, setData] = useState<UserType>({
        first_name: "", last_name: "", email: "", mobileNumber: "", _id: "", address: {
            address1: "",
            address2: "",
            city: "",
            country: "",
            postal_code: "",
        },
        password: ""
    })
    useEffect(() => {
        if (!data || data._id !== userdata._id) {
          setData(userdata);
        }
      }, [userdata]);
      
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const logintoast = toast.loading('Updating data...')
        try {

            const res = await fetch(`/api/user`, { method: "PUT", body: JSON.stringify(data) });
            const resdata = await res.json();
            if (res.status == 401) {
                toast.update(logintoast, { render: resdata.message, autoClose: 3000, type: "error", isLoading: false });
                return;
            }
            if (res.ok) {
                toast.update(logintoast, { render: "Data Updated", autoClose: 3000, type: "success", isLoading: false });
                console.log(resdata);
            }
        } catch (error) {
            console.log(error);
            toast.update(logintoast, { render: "Failed to Update Data", autoClose: 3000, type: "error", isLoading: false });
        }
    }


    return (
        <>
        {data && <form onSubmit={onSubmit}>
            <input
                type="email"
                className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                placeholder='Email Address'
                name='email'
                value={data.email}
                onChange={onChange}
                required
            />
            <input
                type="text"
                className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                placeholder='First Name'
                name='first_name'
                value={data.first_name}
                onChange={onChange}
            />
            <input
                type="text"
                className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                placeholder='Last Name'
                name='last_name'
                value={data.last_name}
                onChange={onChange}
            />
            <input
                type="tel" // Use tel for mobile number input
                className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                placeholder='Mobile Number'
                name='mobileNumber'
                value={data.mobileNumber}
                onChange={onChange}
            />
            <div className='flex flex-col'>
                <input
                    type="text"
                    className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                    placeholder='Address Line 1'
                    name='address.address1'
                    value={data.address?.address1} 
                    onChange={(e) => setData({...data, address:{...data.address, address1: e.target.value}})}
                />
                <input
                    type="text"
                    className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                    placeholder='Address Line 2 (Optional)'
                    name='address.address2'
                    value={data.address?.address2} 
                    onChange={(e) => setData({...data, address:{...data.address, address2: e.target.value}})}
                />
            </div>
            <div className='flex'>
                <input
                    type="text"
                    className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3 mr-2'
                    placeholder='City'
                    name='city'
                    value={data.address?.city} onChange={(e) => setData({...data, address:{...data.address, city: e.target.value}})}
                />
                <input
                    type="text"
                    className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                    placeholder='Postal Code'
                    name='address.postal_code'
                    value={data.address?.postal_code} onChange={(e) => setData({...data, address:{...data.address, postal_code: e.target.value}})}
                />
            </div>
            <input
                type="text"
                className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[#C2C5E1] border border-[#C2C5E1] outline-none w-full p-3'
                placeholder='Country'
                name='address.country'
                value={data.address?.country} onChange={(e) => setData({...data, address:{...data.address, country: e.target.value}})}
            />
            <button type='submit' className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3 text-xl my-4'>Update Profile</button>
        </form>}
        </>
    );
};

export default ProfileUpdate;