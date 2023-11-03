import React from 'react'

export default function ProductItem({ item }) {
    return (
        <div className="h-80 border-gray-400 border rounded-xl p-4 flex flex-col gap-4 hover:border-teal-500 transition-colors hover:border-2 group">
            <img className='w-full h-40 object-contain group-hover:scale-110 transition' src={item.img} alt="image" />
            <p className="font-semibold text-teal-600 flex items-center justify-center h-full group-hover:text-xl transition">{item.title}</p>
        </div>
    )
}
