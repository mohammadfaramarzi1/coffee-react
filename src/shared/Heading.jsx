import React from 'react'

function Heading({title}) {
  return (
    <div>
        <svg className='w-14 h-14 mx-auto'>
            <use href='#category-coffee'></use>
        </svg>
        <h3 className='text-xl md:text-2xl'>{title}</h3>
    </div>
  )
}

export default Heading