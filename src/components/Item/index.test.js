import { render, screen } from '@testing-library/react';
import Item from './index';

const product = {id: 'A99', name: 'Apple', price: 50, offer: {price: 130, amount: 3}};

test('renders product name', () => {
  render(<Item {...product} />);
  const productName = screen.getByText(product.name);
  expect(productName).toBeInTheDocument();
});

test('renders product price', () => {
  render(<Item {...product} />);
  const productName = screen.getByText(product.price);
  expect(productName).toBeInTheDocument();
});

test('renders product offer', () => {
  const { offer: { price, amount } } = product;
  render(<Item {...product} />);
  const productName = screen.getByText(`${price} for ${amount}`);
  expect(productName).toBeInTheDocument();
});

