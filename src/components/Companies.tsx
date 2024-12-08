import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className="w-full px-20 py-10 flex justify-center items-center">
      <Image src={"/companies.png"} width={904} height={93} alt="companies" />
    </div>
  )
}

export default Companies
