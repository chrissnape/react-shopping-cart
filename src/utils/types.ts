export type Offer = {
  price: number,
  amount: number,
};

export type Product = {
  id: string,
  name: string,
  price: number,
  offer: Offer | null,
};

export type Basket = Array<string>;