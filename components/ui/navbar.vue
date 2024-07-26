<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }  
})
</script>
<template>
    <div class="flex justify-between p-5  w-full bg-slate-100 dark:bg-slate-900 border-b bored-gray-200 dark:border-slate-600">
        <h1 class="text-2xl font-medium">{{ name }}</h1>
        <SharedColorMode />
    </div>
</template>