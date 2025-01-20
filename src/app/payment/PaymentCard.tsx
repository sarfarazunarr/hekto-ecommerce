import React from 'react'

const PaymentCard = ({activeValue, value, setmethod, icon, description}: {activeValue:string, value: string, setmethod: (value: string) => void, icon: JSX.Element, description: string}) => {
    return (
        <div className={`cursor-pointer hover:border-gray-400 flex justify-center items-center flex-col gap-1 py-3 rounded-md bg-gray-200 border-2 ${activeValue == value ? 'border-blue' : 'border-transparent'} transition-all ease-linear`} onClick={() => setmethod(value)}>
            {icon}
            <p className='text-xs text-gray-600'>{description}</p>
        </div>
    )
}

export default PaymentCard
