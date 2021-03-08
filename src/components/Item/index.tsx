import React from 'react';
import { Product } from '../../utils/types';

const ItemComponent: React.FC<Product> = ({id, name, price, offer}) => (
  <div>
    <h5>{name}</h5>
  </div>
);

export default ItemComponent;