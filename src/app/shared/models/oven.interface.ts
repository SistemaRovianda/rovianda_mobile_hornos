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

export interface NewProduct {
  estimatedTime: string;
  newLote: string;
  pcc: string;
  productId: string;
  date: string;
  firstRevision: FirstRevision;
}

interface FirstRevision {
  hour: string;
  interTemp: string;
  ovenTemp: string;
  humidity: string;
  observations: string;
}
