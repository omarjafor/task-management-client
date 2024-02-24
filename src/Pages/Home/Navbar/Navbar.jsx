import { useState } from 'react';
import logo from './../../../../public/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(err => console.log(err))
    }

    const navLink = <>
        <li><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-xl font-bold underline outline-offset-8" : "font-bold lg:text-indigo-900 dark:text-teal-600 text-lg"}
        >About</NavLink></li>
        <li><NavLink to='/careers'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-xl font-bold underline outline-offset-8" : "font-bold lg:text-indigo-900 dark:text-teal-600 text-lg"}
        >Careers</NavLink></li>
        <li><NavLink to='/projects'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-xl font-bold underline outline-offset-8" : "font-bold lg:text-indigo-900 dark:text-teal-600 text-lg"}
        >Projects</NavLink></li>
        <li><NavLink to='/blog'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-xl font-bold underline outline-offset-8" : "font-bold lg:text-indigo-900 dark:text-teal-600 text-lg"}
        >Blog</NavLink></li>
    </>
    return (
        <header className="bgWhite py-6">
            <div className="mx-auto flex h-16 maxW-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <img src={logo} alt="" className='h-10' />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {navLink}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex sm:gap-4">
                            {
                                user?.email ?
                                    <>
                                        <Link
                                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white font-medium textWhite transition hover:bg-teal-700"
                                            to='/dashboard'
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogOut}
                                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-900 transition hover:text-teal-600/75 sm:block"
                                            to='/register'
                                        >
                                            Logout
                                        </button>
                                    </> :
                                    <>
                                        <Link
                                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white font-medium textWhite transition hover:bg-teal-700"
                                            to='/login'
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-900 transition hover:text-teal-600/75 sm:block"
                                            to='/register'
                                        >
                                            Register
                                        </Link>
                                    </>
                            }
                        </div>

                        <div className="relative">
                            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                                <button
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                >

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>

                                </button>
                            </div>

                            {
                                showMenu && <>
                                    <div
                                        className="absolute end-0 z-10 mt-2 w-40 rounded-md border border-gray-100 bg-white shadow-lg "
                                        role="menu"
                                    >
                                        <div className="p-2 space-y-3">
                                            <ul className="space-y-3 text-sm">
                                                {navLink}
                                            </ul>
                                            {
                                                user?.email ?
                                                    <>
                                                        <Link
                                                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white font-medium textWhite transition hover:bg-teal-700"
                                                            to='/dashboard'
                                                        >
                                                            Dashboard
                                                        </Link>
                                                        <button
                                                            onClick={handleLogOut}
                                                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-900 transition hover:text-teal-600/75 sm:block"
                                                            to='/register'
                                                        >
                                                            Logout
                                                        </button>
                                                    </> :
                                                    <>
                                                        <Link
                                                            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white font-medium textWhite transition hover:bg-teal-700"
                                                            to='/login'
                                                        >
                                                            Login
                                                        </Link>

                                                        <Link
                                                            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-900 transition hover:text-teal-600/75 sm:block"
                                                            to='/register'
                                                        >
                                                            Register
                                                        </Link>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;