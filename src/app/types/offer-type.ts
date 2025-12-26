export type Offer = {
  id: number;
  title: string;
  description: string;
  details: string;
  price: number;
  likes: number;
  dislikes: number;
  image: string;
  productUrl: string;
};

export type SortableOfferField = keyof Offer;
