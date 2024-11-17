import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}
    className='text-2xl font-extrabold text-gray-600'>
        TripTrekker
    </Link>
  )
}

export default Logo