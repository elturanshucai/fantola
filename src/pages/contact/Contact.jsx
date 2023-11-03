import React, { useState } from 'react'
import Form from './Form'

export default function Contact() {
  const [tab, setTab] = useState('1')
  const changeTab = (e) => {
    setTab(e.target.id)
  }
  return (
    <div className='h-screen p-10'>
      <div className="flex flex-col gap-10 max-w-lg mx-auto">
        <div className="border rounded-lg overflow-hidden">
          <button className={`w-1/2 transition font-semibold ${tab == 1 ? 'bg-teal-700 text-white' : 'bg-white'} p-3`} id='1' onClick={changeTab}>Fantola</button>
          <button className={`w-1/2 transition font-semibold ${tab == 2 ? 'bg-teal-700 text-white' : 'bg-white'} p-3 `} id='2' onClick={changeTab}>Developer</button>
        </div>
        <div className="">
          <Form tab={tab} />
        </div>
      </div>
    </div>
  )
}
