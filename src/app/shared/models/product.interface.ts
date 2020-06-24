export interface ProductFormulation {
  productRoviandaId: number;
  productRovianda: string;
  lots: string[];
}

export interface ProductOven {
  ovenProductId: number;
  pcc: number;
  oven: number;
  product: Product;
  newLotId: number;
  date: string;
}

export interface ProductOvenDetail {
  ovenProductId: number;
  estimatedTime: string;
  newLote: string;
  pcc: string;
  oven: number;
  product: Product;
  date: string;
  revisions: Revision[];
}

export interface Product {
  id: number;
  description: string;
}

export interface Revision {
  hour: string;
  interTemp: string;
  ovenTemp: string;
  humidity: string;
  observations: string;
}
