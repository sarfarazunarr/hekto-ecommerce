import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Navigator = () => {
    return (
        <div className='flex justify-between items-center bg-[#F7F8FB] text-[#8A8FB9] font-lato px-3 py-2 rounded-md'>
            <div className='flex justify-start items-center gap-2'>
                <FaLongArrowAltLeft />
                <p>Previous Post</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <p>Next Post</p>
                <FaLongArrowAltRight />
            </div>
        </div>
    )
}

export default Navigator
