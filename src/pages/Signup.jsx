import React from 'react'
import dribble from '../assets/dribble.jpeg'
import Form from '../components/Form'

const Signup = () => {

    return (
        <div className='w-full h-screen flex'>
            <div className='w-[30%] min-w-[400px] h-full lg:flex hidden flex-col gap-4 bg-[#f3d790] justify-between'>
                <div className='pl-8 pt-8 flex flex-col gap-4 text'>
                    <h3 className='text-[#a18447] text-lg font-medium'>dribbble</h3>
                    <p className='text-[#816328] text-2xl font-bold'>Discover the world's top <br />Designers & Creatives.</p>
                </div>
                <img src={dribble} alt='Image by Peter Tarka' className='w-full' />
                <div className='p-8'>
                    <p className='text-[#816328]'>Art by <u>Peter Tarka</u></p>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Signup