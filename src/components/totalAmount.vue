<template>
  <div class="items-stretch self-center flex w-full max-w-[342px] justify-between gap-5 mt-44 py-1">
    <div class="flex flex-col items-stretch px-5">
      <div class="text-neutral-800 text-opacity-50 text-base font-[450]">
        共 {{ totalQuantity }} 件商品
      </div>
      <div class="text-neutral-800 text-opacity-50 text-base font-[450]">小計</div>
      <div class="text-neutral-800 text-opacity-50 text-base font-[450] mt-5">總計</div>
    </div>
    <div class="flex flex-col items-stretch px-5">
      <div class="text-neutral-800 text-right text-base font-[450] whitespace-nowrap">
        <span>&nbsp;</span>
      </div>
      <div class="text-neutral-800 text-right text-base font-[450] whitespace-nowrap">
        {{ formatCurrency(totalPrice) }}
      </div>
      <div class="text-neutral-800 text-right text-base font-bold whitespace-nowrap mt-4">
        {{ formatCurrency(totalPrice) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import formatCurrency from '@/helpers/format';

defineProps<{
  totalPrice: number;
  totalQuantity: number;
}>();
</script>
