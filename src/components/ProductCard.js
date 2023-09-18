import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    const navigate = useNavigate();
  return (
    <div className='card mt-2 cursor-pointer 'style={{width:350}} role='button' onClick={()=>{navigate(`/product/${props.id}`)}} >
      
        <div className='mt-2'>
              <img src= {props.thumbnail} height={180} width={150} alt={props.title} className='border-radius-9' />
        </div>
        <div className='card-body'>
             <div className='card-title'>{props.title}</div> 
             <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
             <h6 className='mt-2'>Discount: {`$${props.discountPercentage}`}%</h6>
             <h6 className='mt-2'>Rating: {`$${props.rating}`}/5</h6>
             <div>
                {props.stock > 0 ? <button className='btn btn-success'>Available</button>: <button className='btn btn-outline-danger'>Out of stock</button>}
             </div>
        </div>
      
    </div>
  )
}
