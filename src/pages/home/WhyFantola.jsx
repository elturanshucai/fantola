import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export default function WhyFantola() {
    return (
        <div className='why-fantola flex text-white px-5 py-10 sm:p-20'>
            <div className="w-1/2 flex flex-col gap-3">
                <h2 className='font-extrabold text-xl sm:text-4xl mb-2'>Niyə Fantola ?</h2>
                <p className="flex gap-2 items-center">
                    <AiOutlineCheckCircle/>
                    <span>Yüksək keyfiyyət</span>
                </p>
                <p className="flex gap-2 items-center">
                    <AiOutlineCheckCircle/>
                    <span>Möhtəşəm dad</span>
                </p>
                <p className="flex gap-2 items-center">
                    <AiOutlineCheckCircle/>
                    <span>Sərfəli qiymət</span>
                </p>
            </div>
            <div className="flex items-center justify-center w-1/2">
                <img className='object-cover' src="images.png" alt="fantola" />
            </div>
        </div>
    )
}
