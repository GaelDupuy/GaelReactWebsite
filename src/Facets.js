import React from 'react';

const Facets = () => (
  <div className="facets">
    <h2>Categories</h2>
    <ul>
      <li><input type="checkbox" id="cat1" /><label htmlFor="cat1">Category A</label></li>
      <li><input type="checkbox" id="cat2" /><label htmlFor="cat2">Category B</label></li>
    </ul>
    <h2>Brands</h2>
    <ul>
      <li><input type="checkbox" id="brand1" /><label htmlFor="brand1">Brand X</label></li>
      <li><input type="checkbox" id="brand2" /><label htmlFor="brand2">Brand Y</label></li>
    </ul>
    <h2>Price</h2>
    <ul>
      <li><input type="checkbox" id="price1" /><label htmlFor="price1">Up to $100</label></li>
      <li><input type="checkbox" id="price2" /><label htmlFor="price2">Up to $150</label></li>
      <li><input type="checkbox" id="price3" /><label htmlFor="price3">Up to $200</label></li>
    </ul>
  </div>
);

export default Facets;
