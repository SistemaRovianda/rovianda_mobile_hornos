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

export interface DetailProduct {
  ovenProductId: number;
  estimatedTime: string;
  newLote: string;
  pcc: string;
  product: Product;
  date: string;
  revisions: Revision[];
}

export interface Revision {
  hour: string;
  interTemp: string;
  ovenTemp: string;
  humidity: string;
  observations: string;
}

export interface OvenUser {
  nameElaborated: string;
  jobElaborated: string;
  nameVerify: string;
  jobVerify: string;
}
