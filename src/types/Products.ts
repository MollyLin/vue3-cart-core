export interface ProductData {
  details: ProductDetail[];
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

export interface CouponMarts {
  martId: number;
  price: number;
}
