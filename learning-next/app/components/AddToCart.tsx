
'use client'
{/*We need to mention that this would be client side  */}

import React from 'react'
{/*We are going to have the button only be client side because this is the only the user actually would interact with */}
export const AddToCart = () => {
  return (
    <div>
    <button onClick={() => console.log('Click')}>Add To Cart </button>
    </div>
  )
}
