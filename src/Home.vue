<template>
  <div
    class="bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-12 rounded-[32px]"
  >
    <Header />
    <Products :products="products" />
    <TotalAmount />
    <Coupon />
    <CheckOut />
    <div class="justify-center items-center bg-white flex w-full flex-col px-16 py-2">
      <div class="bg-neutral-800 flex w-[134px] shrink-0 h-[5px] flex-col rounded-[100px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useProductStore from '@/stores/product';
import Header from '@/components/Utils/header.vue';
import Products from '@/components/products.vue';
import TotalAmount from '@/components/totalAmount.vue';
import Coupon from '@/components/coupon.vue';
import CheckOut from '@/components/checkOut.vue';
import type { ProductDetail } from '@/types/product';

const products = ref<ProductDetail[]>(useProductStore.details);
const totalQuantity = ref(0);
const totalPrice = ref(0);

const checkout = (): void => {};
</script>
