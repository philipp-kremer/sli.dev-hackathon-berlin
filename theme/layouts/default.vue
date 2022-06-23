<script  setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  class: {
    type: String,
  },
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, false))

</script>
<template>
  <div class="slidev-layout  w-full h-full" :style="style">
    <div class="col-left" :class="props.class">
      <slot />
    </div>
  </div>
</template>
