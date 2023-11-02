import React from 'react'
import { AiOutlineInstagram, AiOutlineMail,AiOutlineFacebook,AiFillTwitterCircle } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

export default function Footer() {
    return (
        <footer className='w-full p-10 flex justify-between'>
            <div className="w-1/3 flex items-center font-extrabold text-5xl text-white">fantola</div>
            <div className="w-1/3 flex flex-col gap-4">
                <p className="flex gap-2 items-center text-white text-xl">
                    <BsTelephone />
                    (012)-345-67-89
                </p>
                <p className="flex gap-2 items-center text-white text-xl">
                    <AiOutlineMail />
                    fantola.az@gmail.com
                </p>
                <p className="flex gap-2 items-center text-white text-xl">
                    <CiLocationOn />
                    Azerbaijan, Baku
                </p>
            </div>
            <div className="w-1/3 flex flex-col gap-4">
                <p className="flex gap-2 items-center text-white text-xl">
                    <AiOutlineInstagram className='text-white text-2xl font-bold' />
                    instagram.com/fantola_az
                </p>
                <p className="flex gap-2 items-center text-white text-xl">
                    <AiOutlineFacebook className='text-white text-2xl font-bold' />
                    facebook.com/fantola_az
                </p>
                <p className="flex gap-2 items-center text-white text-xl">
                    <AiFillTwitterCircle className='text-white text-2xl font-bold' />
                    twitter.com/fantola_az
                </p>
            </div>
        </footer>
    )
}
