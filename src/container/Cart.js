/* eslint-disable array-callback-return */
import React from 'react'
import { useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
export default function Cart() {
    const list = useSelector((state)=>state.cart.list);
  return (
    <>
    {list.map((item) => (
    <ProductListItem {...item} key={item.id} />
))}

    </>
  )
}
