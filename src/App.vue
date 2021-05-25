<template>
  <div>
    {{ test }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const test = '123'
    return { test }
  },
})
</script>
