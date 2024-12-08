import React from 'react'

const Heading = ({text}: {text: string}) => {
  return (
    <h2 className='py-5 text-[40px] font-bold text-offBlue font-josefin-sans text-center'>
      {text}
    </h2>
  )
}

export default Heading
