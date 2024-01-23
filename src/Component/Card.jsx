import React from 'react'


function Card({image,title}) {
  return (
    <div className='bg-gray-200 rounded-xl flex flex-col p-10 m-4'>
       <img src={image} alt=""/>
       <p>{title}</p>
    </div>
  )
}

export default Card