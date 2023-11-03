import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form({ tab }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    return (
        <form className='flex flex-col gap-2' >
            <input id="name" placeholder='Name' className='border-gray-200 focus:border-teal-500 border-2 p-3 outline-none ' required onChange={handleChange} />
            <input id="phone" placeholder='Phone' type='phone' className='border-gray-200 focus:border-teal-500 border-2 p-3 outline-none' required onChange={handleChange} />
            <textarea id="message" placeholder='Type a message..' className='border-gray-200 focus:border-teal-500 border-2 p-3 outline-none min-h-[160px] max-h-[160px]' required onChange={handleChange}></textarea>
            {tab == 1 ?
                <button className='bg-teal-700 p-3 text-center text-white font-semibold hover:opacity-90'>Send Fantola</button> :
                tab == 2 && <Link to={`mailto:elturanfcb@gmail.com?subject=Hello, i am ${formData.name} and my phone is ${formData.phone}&body=${formData.message}`} className='bg-teal-700 p-3 text-center text-white font-semibold hover:opacity-90'>Send Elturan Shucai</Link>
            }
        </form>
    )
}
