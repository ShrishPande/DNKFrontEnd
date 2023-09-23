import React from 'react'
import './ProductForm.css'
import ProdForm from '../ProdForm/ProdForm'

const ProductForm = () => {
  return (
    <div className='ProductForm'>
        <h1>Add product</h1>
        <div className='Container'>
            <ProdForm/>
        </div>
    </div>
  )
}

export default ProductForm