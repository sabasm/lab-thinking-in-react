import React from 'react'
import ProductCategory from './productCategory';
import ProductRow from './productRow';

const ProductTable = (Products) =>{
    console.log(Products)
    return (
        <div>

        <table>
        <tbody>
            <tr>
          <th>Nombre</th>
          <th>Precio</th>
          </tr>
        </tbody>  

        {Products.data.map(P=>
            
            <tbody>
            <ProductCategory key={P.name}{...P} />
            <ProductRow key={P.name}{...P} />
            </tbody>
        
        
        )}

      </table>
      </div>
    )
}

export default ProductTable