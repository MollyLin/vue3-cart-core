<template>
  <!-- v-for="(product, index) in products" :key="index" -->
  <template>
    <div
      class="justify-center items-stretch bg-zinc-100 self-center flex w-full max-w-[342px] gap-3 mt-5 p-2 rounded-lg"
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7a01d6e7a2b205cad80064f7454baa4d2ec134b63a05e0f24ad931c716aaf?apiKey=64907ebed4364efab5134402254f936d&"
        class="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
      />
      <div class="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
        <div class="items-stretch flex justify-between gap-4 px-5">
          <div
            class="overflow-hidden text-neutral-800 text-ellipsis whitespace-nowrap text-xs font-[450] leading-5 grow"
          >
            Men's Harrington Jacket
          </div>
          <div class="text-neutral-800 text-xs font-bold self-center whitespace-nowrap my-auto">
            $148
          </div>
        </div>
        <div class="justify-between items-center flex w-full gap-5 mt-2">
          <div class="items-stretch flex gap-4 my-auto px-5">
            <div class="text-neutral-800 text-xs font-[450]">
              <span class="text-neutral-800">Size</span> -
              <span class="font-bold leading-4">M</span>
            </div>
            <div class="text-neutral-800 text-xs font-[450]">
              <span class="text-neutral-800">Color</span> -
              <span class="font-bold leading-4">Lemon</span>
            </div>
          </div>
          <div class="items-stretch self-stretch flex justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3de065a99837618fff96505383fced5b71023a9215f72ca5c23ed19718e9f4b7?apiKey=64907ebed4364efab5134402254f936d&"
              class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
            /><img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c73ced8a1e391cba509b0f840bf197ed40d769da59d06b681a5e0a40f5b7f2?apiKey=64907ebed4364efab5134402254f936d&"
              class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
