<script>
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  props: {
    value: {
      type: String,
      require: true,
      default: "https://example.com",
    },
    size: {
      type: Number,
      require: false,
      default: 100,
    },
  },
};
</script>

<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
