import React from 'react'
import ProductCategory from './productCategory';
import ProductRow from './productRow';
const ProductTable = (Products) =>{
    console.log(Products)
    return (
        <div>
        <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>  
            <ProductCategory/>
             {Products.data.map(P=>
            <ProductRow key={P.name}{...P} />
             )}
      </table>
      </div>
    )
}

export default ProductTable