<template>
  <div
    class="bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-12 rounded-[32px]"
  >
    <Header @remove-all="removeAll" />
    <Products :products="instantProducts" @update="updateProductList" />
    <TotalAmount
      :is-use-coupon="isUseCoupon"
      :coupon-discount="couponDiscount"
      :sub-total-price="subTotalPrice"
      :total-price="totalPrice"
      :total-quantity="totalQuantity"
    />
    <Coupon :total-quantity="totalQuantity" @use-coupon="useCoupon" />
    <CheckOut />
    <div
      class="justify-center items-center bg-white flex w-full flex-col px-16 py-2"
    >
      <div
        class="bg-neutral-800 flex w-[134px] shrink-0 h-[5px] flex-col rounded-[100px]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import useProductStore from '@/stores/product';
import Header from '@/components/Utils/header.vue';
import Products from '@/components/products.vue';
import TotalAmount from '@/components/totalAmount.vue';
import Coupon from '@/components/coupon.vue';
import CheckOut from '@/components/checkOut.vue';
import formatCurrency from '@/helpers/format';
import type { ProductDetail } from '@/types/product';

const productDetail = useProductStore.details;
const couponDiscount = useProductStore.couponDiscount;
const instantProducts = ref<ProductDetail[]>([]);
const isUseCoupon = ref(false);
const totalQuantity = ref(0);
const subTotalPrice = ref(0);
const totalPrice = ref(0);

const formattedProducts = productDetail.map((product) => {
  return {
    ...product,
    formatPrice: formatCurrency(product.price),
    quantity: 1,
  };
});

const getAmountAndQuantity = () => {
  totalQuantity.value = instantProducts.value.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  subTotalPrice.value = instantProducts.value.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  const getCouponDiscount = isUseCoupon.value ? couponDiscount : 0;
  totalPrice.value = Math.max(subTotalPrice.value - getCouponDiscount);
};

const removeAll = (): void => {
  instantProducts.value = Array.from([]);
  isUseCoupon.value = false;
  nextTick(() => {
    getAmountAndQuantity();
  });
};

const updateProductList = (params: ProductDetail): void => {
  const index = instantProducts.value.findIndex(
    (item) => item.martCode === params.martCode,
  );
  if (index === -1) {
    instantProducts.value.push(params);
    return;
  }
  instantProducts.value[index] = params;
  getAmountAndQuantity();
};

const useCoupon = (param: boolean): void => {
  isUseCoupon.value = param;
};

watch(isUseCoupon, () => {
  totalPrice.value = Math.max(subTotalPrice.value - couponDiscount);
});

onMounted(() => {
  instantProducts.value = formattedProducts;
  nextTick(() => {
    getAmountAndQuantity();
  });
});
</script>
