import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { AiFillCloseSquare } from 'react-icons/ai'

export default function Header() {
    const [top, setTop] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const controls = useAnimation()

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        controls.start({
            rotate: isOpen ? 0 : 90,
        });
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top])
    return (
        <>
            <header className={`bg-white h-28 flex items-center justify-between px-5 sm:px-14 ${top ? '' : 'shadow-md'}`}>
                <NavLink to='/'>
                    <img src='logo.png' className='w-28 h-16 cursor-pointe' />
                </NavLink>
                <div className="justify-center items-center gap-16 hidden sm:visible sm:flex">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Ana Səhifə
                    </NavLink>
                    <NavLink to='/products' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Məhsullar
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Haqqında
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'font-medium text-white p-2 bg-inherit bg-teal-600 rounded-xl transition-[.5s]' : ' font-medium text-teal-500 p-2 bg-inherit  rounded-xl transition-[.5s]')}>Əlaqə
                    </NavLink>
                </div>
                <motion.div
                    onClick={toggleMenu}
                    animate={controls}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                    className='cursor-pointer'
                    id='button'
                >
                    {
                        isOpen ?
                            <AiFillCloseSquare className='visible sm:hidden text-xl text-teal-700' /> :
                            <BiMenu className='visible sm:hidden text-xl text-teal-700' />
                    }
                </motion.div>
            </header >
            {isOpen ?
                <motion.div
                    initial={isOpen ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    id='menu'
                >
                    <AnimatePresence>
                        <div className="absolute w-full bg-teal-700 z-10 flex flex-col text-white font-semibold gap-8 p-10">
                            <Link className='text-center' onClick={toggleMenu} to='/'>Ana Səhifə</Link>
                            <Link className='text-center' onClick={toggleMenu} to='/products'>Məhsullar</Link>
                            <Link className='text-center' onClick={toggleMenu} to='/about'>Haqqında</Link>
                            <Link className='text-center' onClick={toggleMenu} to='/contact'>Əlaqə</Link>
                        </div>
                    </AnimatePresence>
                </motion.div> : null
            }
        </>
    )
}
