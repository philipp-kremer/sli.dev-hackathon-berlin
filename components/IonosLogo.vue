<script>
export default {
  props: {
    left: {
      type: String,
    },
  },
};

</script>

<template>
  <div v-if="left === 'true'" class="absolute top-8 left-10 py-0.5 px-4 text-sm">
    <img src="/IONOSby1und1_White_RGB.svg" width="150" />
  </div>
  <div v-else class="absolute top-8 right-2 py-0.5 px-4 text-sm">
    <img src="/IONOSby1und1_White_RGB.svg" width="150" />
  </div>
</template>
