<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
})
</script>

<template>
  <div class="flex h-[100vh] w-full bg-slate-100 dark:bg-slate-900 justify-between">
        <div class="content1 w-[500px]">
            <LayoutsSidebar />
        </div>
        <div class="content2 w-full">
          <slot />
        </div>
        <div class="content3 w-[500px]">
            <LayoutsNews />
        </div>
    </div>
</template>