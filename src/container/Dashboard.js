import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import firebase from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/reducer/products'
import Ratings from '../components/Ratings'
import { ChevronRight } from '@mui/icons-material'
import { EcommerceCard } from './demo'

export default function Dashboard() {
  const ProductList = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  const getAllProducts = async () => {
    const db = firebase.firestore();
    const products = await db.collection('products').get();
    await dispatch(setProducts(products.docs.map((doc) => doc.data())))
  }

  useEffect(() => {
    getAllProducts()
  }, [ProductList])


  return (
    <div className='d-flex flex-wrap gap-2 justify-content-center'>

      {ProductList.map((Product) => <EcommerceCard {...Product} />)}
    </div>
  )
}

