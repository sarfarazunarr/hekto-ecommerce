import React from 'react'
import Heading from './mini/Heading'
import ServiceCard from './mini/ServiceCard'

const SupportCard = () => {
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
      <Heading text='What Shopex Offer?' />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-10'>
        <ServiceCard title='Free Delivery' image='/free-delivery.png' />
        <ServiceCard title='Return & Refund' image='/cashback.png' />
        <ServiceCard title='Premium Quality' image='/quality.png' />
        <ServiceCard title='24/7 Support' image='/support.png' />
      </div>
    </div>
  )
}

export default SupportCard
