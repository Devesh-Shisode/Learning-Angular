// product.model.ts
export interface Ratings{
   rating: {
    rate: number;
    count: number;
  };
}

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating : Ratings
}
