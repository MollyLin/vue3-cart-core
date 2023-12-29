<template>
  <template v-if="products.length === 0">
    <div
      class="justify-center self-center flex w-full max-w-[342px] my-16 p-2 rounded-lg"
    >
      <div class="pr-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <p class="italic text-lg">購物車被清空囉！</p>
      <p class="italic text-lg">Your Cart is Empty</p>
    </div>
  </template>
  <template v-else v-for="detail in products" :key="detail.martCode">
    <div
      class="justify-center items-stretch bg-zinc-100 self-center flex w-full max-w-[342px] gap-3 mt-5 p-2 rounded-lg"
    >
      <img
        loading="lazy"
        :src="detail.image"
        class="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
      />
      <div
        class="items-stretch self-center flex grow basis-[0%] flex-col my-auto"
      >
        <div class="items-stretch flex justify-between gap-4 px-5">
          <div
            class="overflow-hidden text-neutral-800 text-ellipsis whitespace-nowrap text-xs font-[450] leading-5 grow"
          >
            {{ detail.productName }}
          </div>
          <div
            class="text-neutral-800 text-xs font-bold self-center whitespace-nowrap my-auto"
          >
            {{ detail.formatPrice }}
          </div>
        </div>
        <div class="justify-between items-center flex w-full gap-5 mt-2">
          <div class="items-stretch flex gap-4 my-auto px-5">
            <div class="text-neutral-800 text-xs font-[450]">
              <span class="text-neutral-800">尺寸</span>
              <span class="leading-4">{{ detail.productSize }}</span>
            </div>
            <div class="text-neutral-800 text-xs font-[450]">
              <span class="text-neutral-800">顏色</span>
              <span class="leading-4">{{ detail.productColor }}</span>
            </div>
            <div class="text-neutral-800 text-xs font-[450]">
              <span class="text-neutral-800">數量</span>
              <span class="leading-4">{{ detail.quantity }}</span>
            </div>
          </div>
          <div class="items-stretch self-stretch flex justify-between gap-2">
            <button
              :disabled="
                detail.productQty === 1 || detail.quantity > detail.productQty
              "
              @click="changeQty(detail, 'increase')"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3de065a99837618fff96505383fced5b71023a9215f72ca5c23ed19718e9f4b7?apiKey=64907ebed4364efab5134402254f936d&"
                class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </button>
            <button
              :disabled="detail.quantity > detail.productQty"
              @click="changeQty(detail, 'reduce')"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c73ced8a1e391cba509b0f840bf197ed40d769da59d06b681a5e0a40f5b7f2?apiKey=64907ebed4364efab5134402254f936d&"
                class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { InstantProducts } from '@/types/Products';

defineProps<{
  products: InstantProducts[];
}>();

const setQuantity = ref<number>(1);

const emit = defineEmits(['update']);
const update = (details: InstantProducts): void => {
  emit('update', {
    ...details,
    quantity: setQuantity.value,
  });
};

const changeQty = (details: InstantProducts, mode: string): void => {
  const { productQty, quantity }: { productQty: number; quantity: number } =
    details as {
      productQty: number;
      quantity: number;
    };
  const increaseQty = quantity + 1 > productQty ? productQty : quantity + 1;
  const reduceQty = quantity - 1 < 1 ? 1 : quantity - 1;
  const getQty = mode === 'increase' ? increaseQty : reduceQty;
  setQuantity.value = getQty;
  update(details);
};
</script>
