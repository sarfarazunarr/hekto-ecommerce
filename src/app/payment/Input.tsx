import React from 'react'

const Input = ({ placeholder, span = '1', v=1 }: { placeholder: string, span?: string, v?:1 | 2 }) => {
  return (
    <>
      {v == 1 && <input type="text" className={`bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border-b border-b-[#C5CBE3] outline-none pb-2 w-full col-span-${span}`} placeholder={placeholder} />}
      {v == 2 && <input type="text" className={`bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 w-full col-span-${span}`} placeholder={placeholder} />}
    </>
  )
}

export default Input
