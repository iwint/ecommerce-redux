import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const params = useParams();
  return (
    <div>
      <h6>Product Id: {params.id}</h6>
    </div>
  )
}
