import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faPinterest, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import dlogo from '../assets/dlogo.png'

const Footer = () => {
    return (
        <div className='flex flex-col w-full sm:px-10 px-4 bg-[#fafafa]'>
            <div className='flex md:flex-row flex-col md:gap-4 gap-8 py-10 border-b-2 border-[border-[#f4f4f4]] w-full'>
                <div className='flex flex-col gap-4 md:w-[225px] w-full md:items-start items-center md:text-start text-center'>
                    <h3 className='text-lg font-medium text-[#d8578a]'>dribbble</h3>
                    <p className='text-xs text-[#55545d]'>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                    <div className='flex gap-4'>
                        <FontAwesomeIcon icon={faDribbble} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faPinterest} />
                    </div>
                </div>
                <div className='flex gap-4 w-full justify-between flex-wrap sm:flex-nowrap'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-xs'>For designers</p>
                        <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                            <li>
                                <Link>Go Pro!</Link>
                            </li>
                            <li>
                                <Link>Explore design work</Link>
                            </li>
                            <li>
                                <Link>Design blog</Link>
                            </li>
                            <li>
                                <Link>Overtime podcast</Link>
                            </li>
                            <li>
                                <Link>Playoffs</Link>
                            </li>
                            <li>
                                <Link>Weekly Warm-Up</Link>
                            </li>
                            <li>
                                <Link>Refer a Friend</Link>
                            </li>
                            <li>
                                <Link>Code of conduct</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium text-xs'>Hire designers</p>
                            <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                                <li>
                                    <Link>Post a job opening</Link>
                                </li>
                                <li>
                                    <Link>Post a freelance project</Link>
                                </li>
                                <li>
                                    <Link>Design blog</Link>
                                </li>
                                <li>
                                    <Link>Search for designers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <p className='font-medium text-xs'>Brands</p>
                            <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                                <li>
                                    <Link>Go Pro!</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium text-xs'>Company</p>
                            <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                                <li>
                                    <Link>About</Link>
                                </li>
                                <li>
                                    <Link>Careers</Link>
                                </li>
                                <li>
                                    <Link>Support</Link>
                                </li>
                                <li>
                                    <Link>Media kit</Link>
                                </li>
                                <li>
                                    <Link>Testimonials</Link>
                                </li>
                                <li>
                                    <Link>API</Link>
                                </li>
                                <li>
                                    <Link>Terms of service</Link>
                                </li>
                                <li>
                                    <Link>Privacy policy</Link>
                                </li>
                                <li>
                                    <Link>Cookie policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-medium text-xs'>Directories</p>
                            <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                                <li>
                                    <Link>Design jobs</Link>
                                </li>
                                <li>
                                    <Link>Designers for hire</Link>
                                </li>
                                <li>
                                    <Link>Freelance designers for hire</Link>
                                </li>
                                <li>
                                    <Link>Tags</Link>
                                </li>
                                <li>
                                    <Link>Places</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <p className='font-medium text-xs'>Design assets</p>
                            <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                                <li>
                                    <Link>Dribbble Marketplace</Link>
                                </li>
                                <li>
                                    <Link>Creative Market</Link>
                                </li>
                                <li>
                                    <Link>Fontspring</Link>
                                </li>
                                <li>
                                    <Link>Font Squirrel</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-xs'>Design Resources</p>
                        <ul className='flex flex-col gap-2 text-xs text-[#55545d]'>
                            <li>
                                <Link>Freelancing</Link>
                            </li>
                            <li>
                                <Link>Design Hiring</Link>
                            </li>
                            <li>
                                <Link>Design Portfolio</Link>
                            </li>
                            <li>
                                <Link>Design Education</Link>
                            </li>
                            <li>
                                <Link>Creative Process</Link>
                            </li>
                            <li>
                                <Link>Design Industry Trends</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-between items-center py-8 text-xs'>
                <p className='text-[#5c5b64]'>&copy; 2023 Dribbble. All rights reserved.</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-[#5c5b64]'><b>20,501,853</b> shots dribbbled</p>
                    <img src={dlogo} alt="logo" className='size-4 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Footer