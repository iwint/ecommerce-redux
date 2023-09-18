import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='card md-2'>
      <img src= {props.thumbnail} height={180} width={150} alt={props.title} className='' />
    </div>
  )
}
