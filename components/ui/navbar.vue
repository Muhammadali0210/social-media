<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }  
})
</script>
<template>
    <div class="z-50 flex justify-between p-5  w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-400 dark:border-slate-600">
        <h1 class="text-2xl font-medium">{{ name }}</h1>
        
        <div class="flex gap-2 items-center">
          <NuxtLink to="/notification">
            <UIcon name="ic:outline-notifications"  size="24" />
          </NuxtLink>
        </div>
    </div>
</template>