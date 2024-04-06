import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';


const Form = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: 'John',
        username: 'John',
        email: 'account@refero.design',
        password: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    }

    return (
        <div className='lg:w-[70%] w-[100%] h-full p-6 flex flex-col gap-4'>
            <p className='font-light text-right'>Already a member? <span className='text-blue-900'>Sign In</span></p>
            <form onSubmit={handleSubmit} className='w-full h-full flex justify-center p-2'>
                <div className='flex flex-col gap-8 w-[100%] sm:max-w-[450px] p-2'>
                    <div className='flex flex-col gap-2 lg:text-start text-center'>
                        <h3 className='font-bold text-xl'>Sign up to Dribbble</h3>
                        <li className='text-sm text-[#e35b50]'>Username has already been taken</li>
                    </div>
                    <div className='flex gap-4 w-full'>
                        <div className='font-bold flex flex-col gap-1 w-[50%]'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                onChange={handleChange}
                                value={formData.name}
                                className='bg-[#f3f3f3] rounded-lg px-4 py-2 focus:outline-none font-normal w-full'
                            />
                        </div>
                        <div className='font-bold flex flex-col gap-1 w-[50%]'>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon icon={faTriangleExclamation} className='text-[#e35b50]' />
                                <label htmlFor="username">Username</label>
                            </div>
                            <input
                                type="text"
                                id='username'
                                name='username'
                                onChange={handleChange}
                                value={formData.username}
                                className='bg-[#fbeeee] text-[#e35b50] rounded-lg px-4 py-2 focus:outline-none font-normal w-full'
                            />
                        </div>
                    </div>
                    <div className='font-bold flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            className='bg-[#f3f3f3] rounded-lg px-4 py-2 focus:outline-none font-normal'
                        />
                    </div>
                    <div className='font-bold flex flex-col gap-1'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='6+ characters'
                            onChange={handleChange}
                            value={formData.password}
                            className='bg-[#f3f3f3] rounded-lg px-4 py-2 focus:outline-none font-normal'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <input
                            type="checkbox"
                            name='check'
                            onChange={handleCheckboxChange}
                            className='appearance-none w-12 h-6 border-2 border-[#e7e7e7] checked:bg-[#d8578a] cursor-pointer relative'
                        />
                        <p className='font-light'>Creating an account means you're okay with our <span className='text-blue-900'>Terms of Service, Privacy Policy,</span> and our default <span className='text-blue-900'>Notification Settings</span>.</p>
                    </div>
                    <div className='lg:text-start text-center'>
                        <button type='submit' className='px-10 py-2 bg-[#d8578a] text-white rounded-lg w-auto'>Create Account</button>
                    </div>
                    <p className='text-xs font-light text-[#adadad] lg:text-start text-center'>This site is protected by reCAPTCHA and the Google <br /><span className='text-blue-900'>Privacy Policy</span> and <span className='text-blue-900'>Terms of Service</span> apply.</p>
                </div>
            </form>
        </div>
    )
}

export default Form