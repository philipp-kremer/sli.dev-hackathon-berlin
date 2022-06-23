<script>
export default {
  props: {
    title: {
      type: String,
    },
    social: {
      type: Array,
    },
    rotate: {
      type: String,
      default: 'false'
    }
  },
};
</script>

<template>
  <div
    v-if="rotate !== 'true'"
    class="flex absolute w-full bottom-0 right-2 py-0.5 px-4 text-sm"
  >
    <div class="w-full flex justify-end">
      <a href="https://ionos.com" target="_blank">{{ title }}</a>
    </div>
  </div>
  <div
      v-else
      class="flex absolute w-full  py-0.5 px-4 text-sm transform -rotate-90 -bottom-275px -right-470px"
  >
    <div class="w-full flex justify-end">
      <a href="https://ionos.com" target="_blank">{{ title }}</a>
    </div>
  </div>
</template>
