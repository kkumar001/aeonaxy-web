import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const AvatarAndLocation = ({ showNext }) => {
    const [avatar, setAvatar] = useState('');
    const [location, setLocation] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        setAvatar(e.target.files[0]);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleChooseClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveClick = () => {
        fileInputRef.current.value = null;
        setAvatar('');
    }

    const handleNextPage = () => {
        showNext();
    }

    useEffect(() => {
        if (!avatar || !location) {
            setIsDisabled(true); // Disable the button if either avatar or location is falsy or empty
        } else {
            setIsDisabled(false);
        }
    }, [avatar, location])

    return (
        <div className='w-full min-h-screen flex'>
            <div className='w-[300px] p-8 text-[#c8628a] text-lg font-medium lg:flex hidden'>
                <p>dribbble</p>
            </div>
            <div className='lg:w-[calc(100vw-300px)] w-full h-full p-4 flex lg:justify-start justify-center'>
                <div className='flex flex-col pt-10 px-2 gap-8'>
                    <div className='flex flex-col gap-3 lg:text-start text-center'>
                        <h3 className='text-3xl font-bold'>Welcome! Let's create your profile</h3>
                        <p className='text-[#716f77]'>Let others to get you know better! You can do these later</p>
                    </div>
                    <div className='flex flex-col gap-3 lg:items-start items-center'>
                        <p className='text-lg font-bold'>Add an avatar</p>
                        <div className='flex gap-4 sm:flex-row flex-col lg:items-start items-center'>
                            <div className={`size-[150px] ${avatar ? '' : 'border-2 border-dashed border-[#dadada]'} rounded-full flex justify-center items-center`}>
                                {avatar ? (
                                    <img src={URL.createObjectURL(avatar)} alt='avatar' className='rounded-full size-[150px]' />
                                ) : (
                                    <FontAwesomeIcon icon={faCamera} className='text-[#9b9b9b]' />
                                )}
                            </div>
                            <div className='flex flex-col gap-2 p-2 sm:items-start items-center '>
                                <input type="file" accept="image/*" className='hidden' onChange={handleImageChange} ref={fileInputRef} />
                                {avatar ? (
                                    <button onClick={handleRemoveClick} className='w-[125px] p-2 rounded-lg border border-[#dadada]'>Remove image</button>
                                ) : (
                                    <button onClick={handleChooseClick} className='w-[125px] p-2 rounded-lg border border-[#dadada]'>Choose image</button>
                                )}
                                <p className='text-[#9b9b9b] text-sm font-medium'><FontAwesomeIcon icon={faChevronRight} /> <span>Or choose on of our defaults</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-3'>
                        <p className='text-lg font-bold'>Add your location</p>
                        <input
                            type="text"
                            onChange={handleLocationChange}
                            value={location}
                            placeholder='Enter a location'
                            className='border-b-2 focus:outline-none px-1 py-2'
                        />
                    </div>
                    <div className='flex flex-col gap-1 lg:w-[200px] w-full items-center lg:justify-normal justify-center'>
                        <button
                            className={`w-full mt-4 ${isDisabled ? 'bg-[#e5b4c7]' : 'bg-[#d8578a]'} p-2 text-white text-medium rounded-lg`}
                            disabled={isDisabled}
                            onClick={handleNextPage}
                            onKeyDown={(e) => {
                                console.log(e.key);
                                if (e.key === 'Enter' || e.key === 'Return') {
                                    console.log(e.key);
                                    handleNextPage();
                                }
                            }}
                        >
                            Next
                        </button>
                        {isDisabled ? '' : (
                            <p className='text-[#9b9b9b]'>or Press <b>RETURN</b></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarAndLocation