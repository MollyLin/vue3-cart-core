import type { ProductData, ProductDetail } from '@/types/Products';

const useProductStore = {
  details: [
    {
      martCode: 1,
      productName: "Men's Harrington Jacket",
      productSize: 'M',
      productColor: 'Lemon',
      price: 148,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&', //'https://picsum.photos/200'
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatum.',
      productQty: 10,
    },
    {
      martCode: 2,
      productName: "Men's Coaches Jacket",
      productSize: 'M',
      productColor: 'Black',
      price: 52,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8891a2ab32d3c656f0afa58b4ee4772e060aac188dccdd6b4c0f771b006574a2?apiKey=64907ebed4364efab5134402254f936d&', //'https://picsum.photos/200',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatum.',
      productQty: 7,
    },
  ] as ProductDetail[],
  couponDiscount: 10,
} as ProductData;

export default useProductStore;
