<template>
  <div
    class="bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-12 rounded-[32px]"
  >
    <Header @remove-all="removeAll" />
    <Products :products="instantProducts" @update="updateProductList" />
    <TotalAmount :total-price="totalPrice" :total-quantity="totalQuantity" />
    <Coupon />
    <CheckOut />
    <div class="justify-center items-center bg-white flex w-full flex-col px-16 py-2">
      <div class="bg-neutral-800 flex w-[134px] shrink-0 h-[5px] flex-col rounded-[100px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import useProductStore from '@/stores/product';
import Header from '@/components/Utils/header.vue';
import Products from '@/components/products.vue';
import TotalAmount from '@/components/totalAmount.vue';
import Coupon from '@/components/coupon.vue';
import CheckOut from '@/components/checkOut.vue';
import formatCurrency from '@/helpers/format';
import type { ProductDetail } from '@/types/product';

const productDetail = useProductStore.details;
const instantProducts = ref<ProductDetail[]>([]);
const totalQuantity = ref(0);
const totalPrice = ref(0);

const formattedProducts = productDetail.map((product) => {
  return {
    ...product,
    formatPrice: formatCurrency(product.price),
    quantity: 1,
  };
});

const getAmountAndQuantity = () => {
  totalQuantity.value = instantProducts.value.reduce((acc, item) => acc + item.quantity, 0);
  totalPrice.value = instantProducts.value.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
};

const removeAll = (): void => {
  instantProducts.value = Array.from([]);
  getAmountAndQuantity();
};

const updateProductList = (params: ProductDetail): void => {
  const index = instantProducts.value.findIndex((item) => item.martCode === params.martCode);
  if (index === -1) {
    instantProducts.value.push(params);
    return;
  }
  instantProducts.value[index] = params;
  getAmountAndQuantity();
};

onMounted(() => {
  instantProducts.value = formattedProducts;
  nextTick(() => {
    getAmountAndQuantity();
  });
});
</script>
