import React from 'react'
import ProductItem from './ProductItem'

export default function Products() {
  let array = [
    { img: 'image1.jpg', title: 'Red Metal' },
    { img: 'image3.jpg', title: 'Orange Metal' },
    { img: 'image7.jpg', title: 'Blue Metal' },
    { img: 'image4.jpg', title: 'Blue' },
    { img: 'image5.jpg', title: 'Pink' },
    { img: 'image6.jpg', title: 'Yellow' }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 p-10'>
      {array.map(item => (
        <ProductItem item={item} />
      ))}
    </div>
  )
}
