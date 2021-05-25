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
    console.log(1111)

    const test = '123'
    return { test }
  },
})
</script>
