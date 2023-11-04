import React from 'react'
import { AiOutlineInstagram, AiOutlineMail, AiOutlineFacebook, AiFillTwitterCircle } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

export default function Footer() {
    return (
        <footer className='w-full p-4 sm:p-10 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0'>
            <div className="w-full sm:w-1/3 flex items-center font-extrabold text-5xl text-white">fantola</div>
            <div className="w-full sm:w-1/3 flex flex-col gap-4 text-sm sm:text-xl">
                <p className="flex gap-2 items-center text-white">
                    <BsTelephone />
                    (012)-345-67-89
                </p>
                <p className="flex gap-2 items-center text-white">
                    <AiOutlineMail />
                    fantola.az@gmail.com
                </p>
                <p className="flex gap-2 items-center text-white">
                    <CiLocationOn />
                    Azerbaijan, Baku
                </p>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col gap-4 text-sm sm:text-xl">
                <p className="flex gap-2 items-center text-white">
                    <AiOutlineInstagram className='text-white text-2xl font-bold' />
                    instagram.com/fantola_az
                </p>
                <p className="flex gap-2 items-center text-white">
                    <AiOutlineFacebook className='text-white text-2xl font-bold' />
                    facebook.com/fantola_az
                </p>
                <p className="flex gap-2 items-center text-white">
                    <AiFillTwitterCircle className='text-white text-2xl font-bold' />
                    twitter.com/fantola_az
                </p>
            </div>
        </footer>
    )
}
