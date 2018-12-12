import React from 'react'
import ProductCategory from './productCategory';
import ProductRow from './productRow';
const ProductTable = () =>{
    return (
        <div>
        <table>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
<ProductCategory/>
<ProductRow/>
      </table>
      </div>
    )
}

export default ProductTable