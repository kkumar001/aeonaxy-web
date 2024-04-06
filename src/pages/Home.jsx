import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex items-center justify-center text-center sm:px-20 py-20 px-4 w-full'>
             <div className='flex flex-col gap-4 sm:w-[50%] w-[100%]'>
                <h3 className='text-3xl font-semibold'>Please verify your email...</h3>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='h-[80px] text-[#bbbbbb]'/>
                <p className='text-sm text-[#5c5b64]'>Please verify your email address. We've sent a confirmation email to:</p>
                <p className='text-sm font-bold'>account@refero.design</p>
                <p className='text-sm text-[#5c5b64]'>Click the confirmation link in that email to begin using Dribbble.</p>
                <p className='text-sm text-[#5c5b64]'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-[#d8578a] font-medium'>resend the confirmation email</span>.</p>
                <p className='text-sm text-[#5c5b64]'>Wrong email address? <span className='text-[#d8578a] font-medium'>Change it</span>.</p>
             </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home