import React from 'react'

const Input = ({ placeholder, span = '1', v=1, name, value, onchange }: { placeholder: string, span?: string, v?:1 | 2, name:string, value:string, onchange?:(e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const isReadOnly = typeof onchange == undefined;
  return (
    <>
      {v == 1 && <input type="text" className={`bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border-b border-b-[#C5CBE3] outline-none pb-2 w-full col-span-${span}`} placeholder={placeholder} name={name} value={value} onChange={onchange} />}
      {v == 2 && <input type="text" className={`bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 w-full col-span-${span}`} placeholder={placeholder} name={name} value={value} onChange={onchange} readOnly={isReadOnly}  />}
    </>
  )
}

export default Input
