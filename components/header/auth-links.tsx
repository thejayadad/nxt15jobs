

import React from 'react'
import AuthLinkItems from './link-item'

const routes = [
    {
      label: 'Trips',
      href: '/',
    },
    {
        label: 'Post',
        href: '/post',
      },
    {
      label: 'MyTrips',
      href: '/mytrips',
    },
    {
      label: 'MyItinerary',
      href: '/myitinerary',
    },
  ];

const AuthLinks = () => {
  return (
    <div
    className='hidden md:block items-center space-x-3'
    >
        {routes.map(route => (
            <AuthLinkItems
            label={route.label}
            href={route.href}
            key={route.label}
            />
        ))}
    </div>
  )
}

export default AuthLinks