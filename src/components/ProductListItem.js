import React from 'react'


export default function ProductListItem(props) {

  return (
    <div className='d-flex mt-2 '>
          <img src= {props.thumbnail} height={180} width={150} alt={props.title} className='border-radius-9' />
         <div className='card-title'>{props.title}</div> 
         <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
         <h6 className='mt-2 me-4'>Discount: {`$${props.discountPercentage}`}%</h6>
         <h6 className='mt-2 me-4'>Rating: {`$${props.rating}`}/5</h6>
         <div className='mt-4 me-4'>
            {props.stock > 0 ? <button className='btn btn-success'>Available</button>: <button className='btn btn-outline-danger'>Out of stock</button>}
         </div>
    </div>
  )
}
