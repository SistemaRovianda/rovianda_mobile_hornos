export interface Products {
  ovenProductId: number;
  pcc: number;
  product: Product;
  newLotId: number;
  date: string;
}

export interface Product {
  id: number;
  description: string;
}
