import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center space-x-2'>
                <div className='w-4 h-4 bg-gray-500 rounded-full animate-pulse'></div>
                <div className='w-4 h-4 bg-gray-500 rounded-full animate-pulse'></div>
                <div className='w-4 h-4 bg-gray-500 rounded-full animate-pulse'></div>
            </div>
        </div>
    )
}

export default Loader
