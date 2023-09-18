import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className='p-3 bg-secondary'>
      <h3>Pandian Stores</h3>
         <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
            <button className='btn btn-primary me-4' onClick={()=>{navigate('/')}}>Home </button>
            <input className='form-control' type='search' placeholder='search the item' />
            <button className='btn btn-primary ms-4'>Cart </button>
          </div>
         </div>
    </div>
  )
}
