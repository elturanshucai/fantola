import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import SwiperItem from './SwiperItem'
import WhyFantola from './WhyFantola'

export default function Home() {
  let images = [
    { url: 'photo1.webp', title: 'Pink' },
    { url: 'photo2.webp', title: 'Blue' },
    { url: 'photo3.webp', title: 'Yellow' },
    { url: 'photo4.webp', title: 'Red' }
  ]
  SwiperCore.use([Navigation])
  return (
    <div className=''>
      <div className='flex p-5 sm:p-10 items-center my-4 flex-col sm:flex-row gap-5 sm:gap-0'>
        <div className="flex flex-col max-w-full sm:w-1/2 gap-8">
          <p className='font-bold text-5xl'>
            <span className='text-teal-700'>Fan</span>
            <span className='text-pink-600'>tola</span>
          </p>
          <div className="max-w-sm font-medium text-teal-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora assumenda sed ipsum rerum nesciunt in error laudantium doloremque animi, sequi voluptatibus ipsam dignissimos adipisci perspiciatis labore asperiores maxime id!
          </div>
          <Link to='/products' className='bg-inherit border-teal-800 border-2 text-teal-800 w-fit rounded-3xl py-2 px-5 sm:py-4 sm:px-10 hover:text-white hover:bg-teal-800 transition font-semibold mt-8'>Məhsullar</Link>
        </div>
        <div className="w-full sm:w-1/2 flex items-center">
          <Swiper navigation>
            {images.map(img => (
              <SwiperSlide>
                <SwiperItem img={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <WhyFantola />
    </div>
  )
}
