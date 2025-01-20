"use client";
import React, { useState } from 'react'
import { IoIosCash, IoIosCheckmarkCircle } from 'react-icons/io';
import Input from './Input';
import { FaGooglePay, FaStripe } from 'react-icons/fa';
import { TbBuildingBank, TbGiftCard } from 'react-icons/tb';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import PaymentCard from './PaymentCard';
import useCartStore, { calculateAmount, CartProduct } from '@/store/cartStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface OrderI {
    first_name: string, last_name: string, address: string, address2: string, city: string, country: string, postal_code: string, password: string, payment_method: string, totalAmount: number, email: string, mobileNumber: string, products: CartProduct[]
}

const CheckoutForm = () => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const { cart } = useCartStore();
    const router = useRouter();
    const [orderData, setOrderData] = useState<OrderI>({
        products: [], first_name: "", last_name: "", address: "", address2: "", city: "", country: "", postal_code: "", password: "", payment_method: "", totalAmount: 0, email: "", mobileNumber: ""
    })
    const totalAmount = calculateAmount(cart);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value, products: cart, payment_method: paymentMethod, totalAmount: totalAmount })
    }
    const handleOrder = async () => {
        const toastid = toast.loading('Placing Order...');
        try {
            const res = await fetch(`/api/order`, { method: "POST", body: JSON.stringify(orderData) });
            
            if (res.status == 201) {
                const data = await res.json();
                toast.update(toastid, {render: "Order Placed Successfully!", type: "success", autoClose: 2000, isLoading: false });
                console.log(data);
                setTimeout(() => {
                    router.push(`/order-completed?id=${data.id}`);
                }, 2500)
            }
        } catch (error) {
            toast.update(toastid, {render: "Failed to Place Order", type: "error", autoClose: 2000, isLoading: false });
            console.log(error);

        }

    }
    return (
        <>
            {step == 1 && <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>
                <div className='flex justify-between items-center py-4'>
                    <h2 className='font-josefin-sans font-bold text-lg text-navyBlue' >Contact Information</h2>
                    <p className='font-lato font-medium text-[#C1C8E1]'>Already have an account? Log in</p>
                </div>

                <Input placeholder='Enter Email' name='email' value={orderData.email} onchange={onChange} />
                <Input placeholder='Email Mobile number' name='mobileNumber' value={orderData.mobileNumber} onchange={onChange} />
                <div className='flex justify-start gap-1 pt-8 pb-10'>
                    <IoIosCheckmarkCircle className='text-xs text-green-600' />
                    <p className='text-xs text-gray-500 font-lato'>Keep me up to date on news and excluive offers.</p>
                </div>

                <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >Shipping Address & Customer Detail</h2>
                <div className="grid grid-cols-2 gap-8">
                    <Input placeholder='First Name (Optional)' name='first_name' value={orderData.first_name} onchange={onChange} />
                    <Input placeholder='Last Name ' name='last_name' value={orderData.last_name} onchange={onChange} />
                    <Input placeholder='Address' span='2' name='address' value={orderData.address} onchange={onChange} />
                    <Input placeholder='Appartment, Suit etc (Optional)' span='2' name='address2' value={orderData.address2} onchange={onChange} />
                    <Input placeholder='City' span='2' name='city' value={orderData.city} onchange={onChange} />
                    <Input placeholder='Pakistan' name='country' value={orderData.country} onchange={onChange} />
                    <Input placeholder='Postal code' name='postal_code' value={orderData.postal_code} onchange={onChange} />
                </div>
                <div className='mt-10 mb-5 flex justify-start'>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3' onClick={() => setStep(2)}>Next</button>
                </div>
            </div>}
            {step == 2 && <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>
                <div className='flex justify-between items-center py-4'>
                    <h2 className='font-josefin-sans font-bold text-lg text-navyBlue' >Create Password</h2>
                </div>

                <Input placeholder='Enter New Password...' name='password' value={orderData.password} onchange={onChange} />

                <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >Payment Method</h2>
                <div className="grid grid-cols-4 gap-4">

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
