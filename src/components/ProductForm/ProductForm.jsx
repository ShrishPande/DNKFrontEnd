import React from 'react'
import './ProductForm.css'
import ProdForm from '../ProdForm/ProdForm'

const ProductForm = () => {
  return (
    <div className='ProductForm'>
        <h2>Add Product</h2>
        <div className='Container'>
            <ProdForm/>
        </div>
    </div>
  )
}

export default ProductForm