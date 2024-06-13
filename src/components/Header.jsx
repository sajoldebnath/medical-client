import React, { useContext } from 'react'
import { GlobalContext } from '../context';
import { Link } from 'react-router-dom';
const Header = () => {
    const {user ,setUser} = useContext(GlobalContext)
    console.log(user)
    return (
        <div>
            <header className="bg-white lg:py-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
                        <div className="flex-shrink-0">
                            <a
                                className="flex"
                                href="#"
                                title=""
                            >
                                <img
                                    alt=""
                                    className="w-auto h-8 lg:h-10"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                />
                            </a>
                        </div>
                        <button
                            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                            type="button"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                        <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/'}
                        
                        >
                            Home
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/appointment'}
                        
                        >
                            Appointment
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/service'}
                        
                        >
                            Service
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/doctors'}
                        
                        >
                            Doctors
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/about'}
                        
                        >
                            About
                        </Link>
                        
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <a
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                href="#"
                                title=""
                            >
                                {' '}Sign up{' '}
                            </a>
                            <a
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                href="#"
                                title=""
                            >
                                {' '}Sign in{' '}
                            </a>
                        </div>
                    </nav>
                    <nav className="flex flex-col py-4 space-y-2 lg:hidden">
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/'}
                        
                        >
                            Home
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/appointment'}
                        
                        >
                            Appointment
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/service'}
                        
                        >
                            Service
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/doctors'}
                        
                        >
                            Doctors
                        </Link>
                        <Link
                            className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                            to={'/about'}
                        
                        >
                            About
                        </Link>
                       
                    </nav>
                    
                </div>
            </header>
        </div>
    )

}

export default Header;