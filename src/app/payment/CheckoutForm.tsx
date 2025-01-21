"use client";
import React, { useEffect, useState } from 'react'
import { IoIosCash, IoIosCheckmarkCircle } from 'react-icons/io';
import Input from './Input';
import { FaGooglePay, FaStripe } from 'react-icons/fa';
import { TbBuildingBank, TbGiftCard } from 'react-icons/tb';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import PaymentCard from './PaymentCard';
import useCartStore, { calculateAmount } from '@/store/cartStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useUser from '@/store/userStore';


const CheckoutForm = () => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const { cart } = useCartStore();
    const { user} = useUser();
    const router = useRouter();
    const totalAmount = calculateAmount(cart);
    
    useEffect(() => {
        if(user == null){
            router.push('/login');
        }
    }, []);

    const handleOrder = async () => {
        const toastid = toast.loading('Placing Order...');
        try {
            if(cart.length <= 0 || paymentMethod.length <= 1 || totalAmount == 0){
                toast.update(toastid, {render: "Make sure you have products in cart, selected payment method!", type: "error", autoClose: 2000, isLoading: false });
            }
            const res = await fetch(`/api/order`, { method: "POST", body: JSON.stringify({
                products: cart, paymentMethod, totalAmount
            }) });
            if(res.status == 401){
                router.push('/login');
                return;
            }
            
            if (res.status == 201) {
                const data = await res.json();
                toast.update(toastid, {render: "Order Placed Successfully!", type: "success", autoClose: 2000, isLoading: false });
                setTimeout(() => {
                    router.push(`/order-completed?id=${data.id}`);
                }, 2500)
            }
            if(res.status == 500){
                toast.update(toastid, {render: "Failed to Place Order", type: "error", autoClose: 2000, isLoading: false });
            }
        } catch (error) {
            toast.update(toastid, {render: "Failed to Place Order", type: "error", autoClose: 2000, isLoading: false });
            console.log(error);
        }

    }
    return (
        <>
            {user && step == 1 && <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>
                <div className='flex justify-between items-center py-4'>
                    <h2 className='font-josefin-sans font-bold text-lg text-navyBlue' >Contact Information</h2>
                    <p className='font-lato font-medium text-[#C1C8E1]'>Already have an account? Log in</p>
                </div>

                <Input placeholder='Enter Email' name='email' value={user.email} />
                <Input placeholder='Email Mobile number' name='mobileNumber' value={user.mobileNumber}  />
                <div className='flex justify-start gap-1 pt-8 pb-10'>
                    <IoIosCheckmarkCircle className='text-xs text-green-600' />
                    <p className='text-xs text-gray-500 font-lato'>Keep me up to date on news and excluive offers.</p>
                </div>

                <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >Shipping Address & Customer Detail</h2>
                <div className="grid grid-cols-2 gap-8">
                    <Input placeholder='First Name (Optional)' name='first_name' value={user.first_name}  />
                    <Input placeholder='Last Name ' name='last_name' value={user.last_name}  />
                    <Input placeholder='Address' span='2' name='address' value={user.address.address1}  />
                    <Input placeholder='Appartment, Suit etc (Optional)' span='2' name='address2' value={user.address.address2}  />
                    <Input placeholder='City' span='2' name='city' value={user.address.city}  />
                    <Input placeholder='Pakistan' name='country' value={user.address.country}  />
                    <Input placeholder='Postal code' name='postal_code' value={user.address.postal_code}  />
                </div>
                <div className='mt-10 mb-5 flex justify-start'>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3' onClick={() => setStep(2)}>Next</button>
                </div>
            </div>}
            {user && step == 2 && <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>

                <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >Payment Method</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">

                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<FaStripe className='text-5xl text-offBlue' />} description='Pay with Stripe' value='stripe' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<FaGooglePay className='text-5xl text-offBlue' />} description='Pay with G-Pay' value='gpay' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<TbGiftCard className='text-4xl text-offBlue' />} description='Pay with Gift Cards' value='gift_cards' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<h2 className='text-2xl font-bold text-offBlue'>1Link</h2>} description='Pay with 1Link' value='1link' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<IoIosCash className='text-4xl text-offBlue' />} description='Cash on Delivery' value='cod' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<TbBuildingBank className='text-4xl text-offBlue' />} description='Buy on Installment' value='installment' />
                    <PaymentCard activeValue={paymentMethod} setmethod={setPaymentMethod} icon={<BsFillCreditCard2FrontFill className='text-4xl text-offBlue' />} description='Pay with Card' value='card' />
                </div>
                <div className='mt-10 mb-5 flex justify-start items-center gap-5'>
                    <button className='bg-black rounded-sm font-josefin-sans px-8 text-white py-3' onClick={() => setStep(1)} >Back</button>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3' onClick={() => handleOrder()} >Place Order</button>
                </div>
            </div>}
        </>
    )
}

export default CheckoutForm
