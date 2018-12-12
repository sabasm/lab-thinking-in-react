import React, { Component } from 'react';
import Searchbar from './searchbar';
import ProductTable from './productTable';

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <Searchbar/>
        <ProductTable/>
      </div>
    );
  }
}

export default Table;