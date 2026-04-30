import React from 'react'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'

const Gallary = () => {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-6 lg:mx-8 mb-24'>
      <img src={Img1} alt="" className='w-120 rounded-2xl transition delay-200 duration-300 hover:scale-[1.02]'/>
      <img src={Img2} alt="" className='w-120 rounded-2xl transition delay-200 duration-300 hover:scale-[1.02]'/>
      <img src={Img3} alt="" className='w-120 rounded-2xl transition delay-200 duration-300 hover:scale-[1.02]'/>
      <img src={Img4} alt="" className='w-120 rounded-2xl transition delay-200 duration-300 hover:scale-[1.02]'/>
    </div>
  )
}

export default Gallary
