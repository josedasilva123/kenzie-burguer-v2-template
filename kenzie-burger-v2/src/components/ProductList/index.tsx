import React from 'react'
import { productsMock } from '../../services/apiMock'
import ProductCard from './ProductCard'
import { StyledProductList } from './style'

const ProductList = () => {
  return (
    <StyledProductList>
        {productsMock.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </StyledProductList>
  )
}

export default ProductList