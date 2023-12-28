export interface ProductData {
  details: ProductDetail[];
  couponDiscount: number;
  couponMarts: [];
}

export interface ProductDetail {
  martCode: number;
  productName: string;
  productSize: string;
  productColor: string;
  price: number;
  image: string;
  description: string;
  productQty: number;
}
