import Loader from '@/components/mini/Loader'
import React from 'react'

const Loading = () => {
  return (
    <div className="bg-gray-600/50 filter backdrop:blur-md w-full h-screen flex justify-center">
        <Loader />
      
    </div>
  )
}

export default Loading
