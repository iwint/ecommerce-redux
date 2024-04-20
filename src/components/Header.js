import React from 'react'
import { useNavigate } from 'react-router-dom'
// import firebase, { handlePopulate } from '../config/firebase';
// import { ProductList } from '../data/ProductList';

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }


  return (
    <div className='p-3 bg-primary'>
      <h3 style={{ color: 'white' }}>QD Shop</h3>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
          <button className='btn btn-warning me-4' onClick={() => { navigate('/') }}>Home </button>
          <input className='form-control' type='search' placeholder='search the item' />
          <button className='btn btn-warning ms-4' onClick={() => { navigate("/cart") }}>Cart </button>
          <button className='btn btn-warning ms-4 w-50' onClick={handleLogout}>Log out </button>
        </div>
      </div>
    </div>
  )
}
