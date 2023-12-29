<template>
  <div
    class="bg-zinc-100 self-center flex w-full max-w-[342px] items-center justify-between gap-5 mt-8 pl-4 pr-2.5 py-2 rounded-lg"
  >
    <div class="flex items-stretch gap-3.5 my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a42747f92ef2637a3c31f60cd822de82bcafbcf59a192116ae00e8328262889c?apiKey=64907ebed4364efab5134402254f936d&"
        class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
      />
      <input
        class="bg-zinc-100 w-full rounded-md px-1 py-1.5 text-neutral-000 text-opacity-90 font-[450] leading-5 self-center grow whitespace-nowrap my-auto focus:ring-1 focus:ring-gray-300"
        type="text"
        placeholder="love2024"
        v-model.trim="couponCodeInput"
      />
    </div>
    <button type="button" :disabled="totalQuantity === 0" @click="useCoupon">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f49bc858e6469a9db18db0b3fec971cf893ad1b97997dac60924b7fdd47f7f1?apiKey=64907ebed4364efab5134402254f936d&"
        class="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
      />
    </button>
  </div>
  <div
    v-if="hasError"
    class="self-center flex w-full max-w-[342px] items-center justify-between gap-5 mt-1 pl-4 pr-2.5 py-0.5 rounded-lg"
  >
    <p class="text-rose-600">序號輸入錯誤</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const couponCodeInput = ref<string>('');
const hasError = ref<boolean>(false);

defineProps<{
  totalQuantity: number;
}>();

const emit = defineEmits(['use-coupon']);
const useCoupon = (): void => {
  if (couponCodeInput.value !== 'love2024') {
    hasError.value = true;
    return;
  }
  emit('use-coupon', true);
};
</script>
