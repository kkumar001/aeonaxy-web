import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import hire from '../assets/hire.png'
import share from '../assets/share.png'
import inspiration from '../assets/inspiration.png'

const WhatBrings = () => {
    const [roles, setRoles] = useState([]);
    const [isShareChecked, setIsShareChecked] = useState(false);
    const [isHireChecked, setIsHireChecked] = useState(false);
    const [isInspirationChecked, setIsInspirationChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();
    const [shareStatus, setShareStatus] = useState(false);
    const [hireStatus, setHireStatus] = useState(false);
    const [inspirationStatus, setInspirationStatus] = useState(false);


    const handleFinish = () => {
        navigate('/');
    }

    const handleShare = () => {
        setIsShareChecked(!isShareChecked);
        setShareStatus(!shareStatus);
        if (!shareStatus) {
            setRoles([...roles, 'share']);
        } else {
            const newRole = roles.filter(prev => prev !== 'share')
            setRoles([...newRole]);
        }
    }

    const handleHire = () => {
        setIsHireChecked(!isHireChecked);
        setHireStatus(!hireStatus);
        if (!hireStatus) {
            setRoles([...roles, 'hire']);
        } else {
            const newRole = roles.filter(prev => prev !== 'hire')
            setRoles([...newRole]);
        }
    }

    const handleInspiration = () => {
        setIsInspirationChecked(!isInspirationChecked);
        setInspirationStatus(!inspirationStatus);
        if (!inspirationStatus) {
            setRoles([...roles, 'inspiration']);
        } else {
            const newRole = roles.filter(prev => prev !== 'inspiration')
            setRoles([...newRole]);
        }
    }

    useEffect(() => {
        if (roles.length === 0) {
            setIsDisabled(true); // Disable the button if either avatar or location is falsy or empty
        } else {
            setIsDisabled(false);
        }
    }, [roles])


    return (
        <div className='w-full min-h-screen flex'>
            <div className='lg:flex hidden h-20 justify-between w-[200px] pl-8 pt-8 text-[#c8628a] text-lg font-medium items-center'>
                <p>dribbble</p>
                <Link to='/profile' className='size-10 rounded-lg bg-[#f2f2f2] flex items-center justify-center text-[#65646b] font-bold'>
                    <FontAwesomeIcon icon={faChevronLeft} className='size-3' />
                </Link>
            </div>
            <div className='lg:w-[calc(100vw-200px)] w-full flex items-center lg:justify-normal justify-center'>
                <div className='flex flex-col gap-24 lg:px-0 px-4 lg:py-0 py-10'>
                    <div className='flex flex-col gap-3 items-center lg:text-left text-center'>
                        <h3 className='text-3xl font-bold'>What brings you to Dribbble?</h3>
                        <p className='text-[#716f77]'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex lg:gap-10 py-4 lg:flex-row flex-col gap-[100px] lg:items-start items-center'>
                            <button
                                className={`p-4 flex flex-col gap-2 items-center justify-between lg:size-[240px] size-[350px] font-bold text-center ${isShareChecked ? 'border-2 border-[#d8578a] relative' : 'border-[#d7d7d7] border'} rounded-xl`}
                                onClick={handleShare}
                            >
                                <img src={share} alt='img' className={`w-[80%] ${isShareChecked ? 'absolute  lg:-top-[60px] -top-[88px]' : ''}`} />
                                <p className={`${isShareChecked ? 'lg:mt-[35px] mt-[60px]' : ''} lg:text-lg text-xl`}>I'm a designer looking to share my work</p>
                                {isShareChecked ? (
                                    <p className='text-[#716f77] font-medium lg:text-xs text-lg'>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                                ) : ''}
                                <div className={`flex items-center justify-center size-6 ${isShareChecked ? 'bg-[#d8578a]' : 'border border-[#d7d7d7]'} rounded-full cursor-pointer`}>
                                    <FontAwesomeIcon icon={faCheck} className='text-white' />
                                </div>
                            </button>
                            <button
                                className={`p-4 flex flex-col gap-2 items-center justify-between lg:size-[240px] size-[350px] font-bold text-center border ${isHireChecked ? 'border-2 border-[#d8578a] relative' : 'border-[#d7d7d7] border'} rounded-xl`}
                                onClick={handleHire}
                            >
                                <img src={hire} alt='img' className={`w-[80%] ${isHireChecked ? 'absolute  lg:-top-[60px] -top-[88px]' : ''}`} />
                                <p className={`${isHireChecked ? 'lg:mt-[35px] mt-[60px]' : ''} lg:text-lg text-xl`}>I'm looking to hire a designer</p>
                                {isHireChecked ? (
                                    <p className='text-[#716f77] font-medium lg:text-xs text-lg'>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                                ) : ''}
                                <div className={`flex items-center justify-center size-6 ${isHireChecked ? 'bg-[#d8578a]' : 'border border-[#d7d7d7]'} rounded-full cursor-pointer`}>
                                    <FontAwesomeIcon icon={faCheck} className='text-white' />
                                </div>
                            </button>
                            <button
                                className={`p-4 flex flex-col gap-2 items-center justify-between lg:size-[240px] size-[350px] font-bold text-center border ${isInspirationChecked ? 'border-2 border-[#d8578a] relative' : 'border-[#d7d7d7] border'} rounded-xl`}
                                onClick={handleInspiration}
                            >
                                <img src={inspiration} alt='img' className={`w-[80%] ${isInspirationChecked ? 'absolute  lg:-top-[60px] -top-[88px]' : ''}`} />
                                <p className={`${isInspirationChecked ? 'lg:mt-[35px] mt-[60px]' : ''} lg:text-lg text-xl`}>I'm looking for design inspiration</p>
                                {isInspirationChecked ? (
                                    <p className='text-[#716f77] font-medium lg:text-xs text-lg'>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                                ) : ''}
                                <div className={`flex items-center justify-center size-6 ${isInspirationChecked ? 'bg-[#d8578a]' : 'border border-[#d7d7d7]'} rounded-full cursor-pointer`}>
                                    <FontAwesomeIcon icon={faCheck} className='text-white' />
                                </div>
                            </button>
                        </div>
                        <div className='flex flex-col gap-1 w-full items-center'>
                            {isDisabled ? (
                                <p className='h-6'></p>
                            ) : (
                                <p className='text-base h-6 font-medium transition-all duration-300 ease-out'>Anything else? You can select multiple</p>
                            )}
                            <button
                                className={`w-[200px] mt-4 ${isDisabled ? 'bg-[#e5b4c7]' : 'bg-[#d8578a]'} p-2 text-white text-medium rounded-lg`}
                                disabled={isDisabled}
                                onClick={handleFinish}
                            >
                                Finish
                            </button>
                            {isDisabled ? (
                                <p className='h-6'></p>
                            ) : (
                                <p className='text-[#9b9b9b] text-base h-6'>or Press <b>RETURN</b></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatBrings