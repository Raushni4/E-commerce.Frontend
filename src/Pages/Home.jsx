import React from 'react'
import Slider from '../Component/Slider'
import Card from '../Component/Card'

export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='max-w-[70vw] '>
            <Slider/>
        </div>
        <div className='bg-gray-900 w-full flex-col flex justify-center mt-10 h-40 items-center '>
            <p className='text-white font-lemon'>
                Come and buy pure products.
            </p>
            <button className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-[#ff5252]
            border-white border-[2px] rounded-[10px] shadow-white shadow-[5px_5px_black] duration-[0.3s] transition-all ease-in hover:bg-white
            hover:text-[#ff5252] hover:border-[#ff5252] border-[2px] hover:shadow-[#ff5252] active:bg-[#fcf414] active:shadow-none active:translate-y-[4px]'>Explore Now</button>
        </div>
        <div className='flex flex-row'>
          <Card title={"Metal"} image={"https://img.icons8.com/ios-filled/50/metal.png"}/>
          <Card title={"Iron"} image={"https://img.icons8.com/plasticine/100/iron-bars.png"}/>
          <Card title={"Copper"} image={"https://img.icons8.com/external-bearicons-gradient-bearicons/64/external-Copper-periodic-table-bearicons-gradient-bearicons.png"}/>
        </div>
    </div>
  )
}
