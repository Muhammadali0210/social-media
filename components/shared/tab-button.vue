<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }  
})
</script>

<template>
  <UButton block size="lg" variant="solid" color="blue" class="flex justify-start">
    <div class="text-lg"><UIcon name="mdi:home" />{{ name }}</div>
  </UButton>
</template>
