export interface Iproduct  {
  pname: string;
  pdecs: string;
  PCat: Ptype;
}
export type Ptype = 'Product'|'Catlog'
