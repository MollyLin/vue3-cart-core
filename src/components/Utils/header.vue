<template>
  <div class="flex w-full flex-col items-stretch mt-3.5 px-7">
    <div class="flex items-stretch justify-between gap-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/090753f71452aef7b70407321f9f809d439cecb117335ac38a9f291625a873d7?apiKey=64907ebed4364efab5134402254f936d&"
        class="aspect-square object-contain object-center w-10 justify-center items-center backdrop-blur-2xl overflow-hidden shrink-0 max-w-full"
      />
      <div class="text-neutral-800 text-base font-bold my-auto">Cart</div>
    </div>
    <div class="text-neutral-800 text-base font-[450] whitespace-nowrap mt-7 self-end">
      <button
        class="bg-violet-100 hover:bg-violet-300 px-5 py-2 text-sm leading-5 rounded-full font-normal text-black"
        @click="removeAll"
      >
        Remove All
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['removeAll']);
const removeAll = (): void => {
  emit('removeAll');
};
</script>
