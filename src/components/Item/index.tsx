import { FC, MouseEventHandler } from 'react';
import { Product } from '../../utils/types';
import './style.css';

type Props = {
  product: Product,
  onClick: MouseEventHandler,
}

const ItemComponent: FC<Props> = ({product, onClick}) => {
  const { name, price, offer }= product;
  return (
    <div className="item">
      <h5 className="item__header">{name}: {price}</h5>
      {offer && (
        <div>{`${offer.price} for ${offer.amount}`}</div>
      )}
      <button onClick={onClick} data-testid="button">
        BUY ME
      </button>
    </div>
  );
};

export default ItemComponent;