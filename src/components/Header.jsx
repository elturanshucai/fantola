import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [top, setTop] = useState(true)
    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top])
    return (
        <header className={`bg-white h-28 flex items-center justify-between px-14 ${top ? '' : 'shadow-md'}`}>
            <NavLink to='/'>
                <img src='logo.png' className='w-28 h-16 cursor-pointe' />
            </NavLink>
            <div className="flex justify-center items-center gap-16">
                <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Ana Səhifə
                </NavLink>
                <NavLink to='/products' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Məhsullar
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Haqqında
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Əlaqə
                </NavLink>
            </div>
        </header>
    )
}
