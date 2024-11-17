import React from 'react'
import Logo from '../ui/logo'
import MobileMenu from './mobile-menu'
import { auth } from '@/auth'
import SignIn from './signin'
import AuthLinks from './auth-links'
import SignOut from './signout'

const Header = async () => {
    const session= await auth()
    const userEmail = session?.user?.email
    console.log("user " + userEmail)
  return (
    <header className='border-b w-full'>
        <nav className='flex items-center justify-between mx-auto max-w-screen-xl p-4'>
            <Logo />
                {session ? (

                            <>
            <div className='flex items-center space-x-2'>
                    <MobileMenu  />
                    <AuthLinks />
                    <SignOut />
            </div>
                            </>
                ) : (
                    <>
                        <SignIn />
                    </>
                )

            }
        </nav>
    </header>
  )
}

export default Header