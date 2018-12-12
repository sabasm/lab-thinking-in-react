import React, { Component } from 'react';
import Searchbar from './searchbar';
import ProductTable from './productTable';
import Products from '../data.json'

class Table extends Component {
  state ={
    Products
  }
  render() {
    return (
      <div className="Table">
        <Searchbar/>
        <ProductTable {...this.state.Products}/>
      </div>
    );
  }
}

export default Table;
