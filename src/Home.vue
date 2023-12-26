<template>
  <div
    class="bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto pt-12 rounded-[32px]"
  >
    <Header />
    <Products />
    <TotalAmount />
    <Coupon />
    <CheckOut />
    <div
      class="items-stretch self-center flex w-full max-w-[342px] justify-between gap-5 mt-44 py-1"
    >
      <div class="flex flex-col items-stretch px-5">
        <div class="text-neutral-800 text-opacity-50 text-base font-[450]">Subtotal</div>
        <div class="text-neutral-800 text-opacity-50 text-base font-[450] whitespace-nowrap mt-5">
          Shipping Cost
        </div>
        <div class="text-neutral-800 text-opacity-50 text-base font-[450] mt-5">Tax</div>
        <div class="text-neutral-800 text-opacity-50 text-base font-[450] mt-5">Total</div>
      </div>
      <div class="flex flex-col items-stretch px-5">
        <div class="text-neutral-800 text-right text-base font-[450] whitespace-nowrap">$200</div>
        <div class="text-neutral-800 text-right text-base font-[450] whitespace-nowrap mt-5">
          $8.00
        </div>
        <div class="text-neutral-800 text-right text-base font-[450] whitespace-nowrap mt-5">
          $0.00
        </div>
        <div class="text-neutral-800 text-right text-base font-bold whitespace-nowrap mt-4">
          $208
        </div>
      </div>
    </div>
    <div
      class="bg-zinc-100 self-center flex w-full max-w-[342px] items-center justify-between gap-5 mt-8 pl-4 pr-2.5 py-2 rounded-lg"
    >
      <div class="flex items-stretch gap-3.5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a42747f92ef2637a3c31f60cd822de82bcafbcf59a192116ae00e8328262889c?apiKey=64907ebed4364efab5134402254f936d&"
          class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div
          class="text-neutral-800 text-opacity-50 text-xs font-[450] leading-5 self-center grow whitespace-nowrap my-auto"
        >
          Enter Coupon Code
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f49bc858e6469a9db18db0b3fec971cf893ad1b97997dac60924b7fdd47f7f1?apiKey=64907ebed4364efab5134402254f936d&"
        class="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
      />
    </div>
    <div class="justify-center items-stretch bg-white flex w-full flex-col mt-10 px-6 py-3.5">
      <div
        class="text-white text-base font-[450] whitespace-nowrap justify-center items-center bg-violet-500 px-16 py-4 rounded-[100px]"
      >
        Checkout
      </div>
    </div>
    <div class="justify-center items-center bg-white flex w-full flex-col px-16 py-2">
      <div class="bg-neutral-800 flex w-[134px] shrink-0 h-[5px] flex-col rounded-[100px]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '@/components/Utils/header.vue'
import Products from '@/components/products.vue'
import TotalAmount from '@/components/totalAmount.vue'
import Coupon from '@/components/coupon.vue'
import CheckOut from '@/components/checkOut.vue'

const totalQuantity = ref(0)
const totalPrice = ref(0)

const checkout = (): void => {}

onMounted(() => {
  console.log('Home component mounted')
})
</script>
