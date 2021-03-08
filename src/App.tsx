import { useState } from 'react';
import Item from './components/Item';
import { Basket, Product } from './utils/types';
import './App.css';

const products: Array<Product> = [
  {id: 'A99', name: 'Apple', price: 50, offer: {price: 130, amount: 3}},
  {id: 'B15', name: 'Banana', price: 30, offer: {price: 45, amount: 2}},
  {id: 'C40', name: 'Cherry', price: 60, offer: null},
  {id: 'T34', name: 'Tangerine', price: 99, offer: null},
];

const getTotal = (basket: Array<string>) => {
  let total: number = 0;
  const talliedIds: Array<Array<string>> = (
    products.map((product: Product): Array<string> => (
      basket.filter((item: string): boolean => item === product.id)
    ))
  );

  talliedIds.forEach((talliedId: Array<string>) => {
    let tally: number = 0;
    talliedId.forEach((id: string, i: number) => {
      const product: Product | undefined = products.find((p: Product) => p.id === id);
      if (product) {
        const { offer, price } = product;
        if (offer) {
          const { price: offerPrice, amount } = offer;
          if (tally < amount - 1) {
            tally ++;
            if (i === talliedId.length -1) {
              total += tally * price;
            }
          } else {
            tally = 0;
            total += offerPrice;
          }
        } else {
          total += price;
        }
      }
    });
  });

  return total;
};

const App = (): JSX.Element => {
  const [basket, updateBasket] = useState<Basket>([]);
  return (
    <div className="App">
      <div className="app__product-grid">
        {products.map((product: Product, i: number): JSX.Element => (
          <div className="app__product-grid__item">
            <Item
              key={`product-${i}`}
              product={product}
              onClick={() => updateBasket([...basket, product.id])}
            />
          </div>
        ))}
      </div>
      <div>
        {basket.map((id: string, i: number): JSX.Element => {
          const product: Product | undefined = products.find((p: Product) => p.id === id);
          return (
            <div key={`basket-item=${i}`}>
              {product ? product.name : 'undefined'}
              {product ? product.price : ''}
              <button
                onClick={() => (
                  updateBasket(basket.filter((item: string, j: number): boolean => j !== i))
                )}
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
      <h4>
        Total
        {getTotal(basket)}
      </h4>
    </div>
  );
}

export default App;
