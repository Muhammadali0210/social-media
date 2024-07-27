<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  email: undefined,
  password: undefined,
});

const isPost = ref(false);

</script>

<template>
  <div class="h-screen">
    <!-- <UiNavbar name="Create" /> -->
      <div class="h-[10vh] z-50 flex justify-between items-center p-5  w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-400 dark:border-slate-600">
        <h1 class="text-2xl font-medium flex items-center gap-2"><NuxtLink to="/"><UIcon name="material-symbols:close-rounded" /></NuxtLink> New post</h1>
        <template v-if="!isPost">
          <UButton @click="isPost = true" variant="ghost" ><div class="text-lg text-blue-400">Post</div></UButton>
        </template>
        <template v-else>
          <UIcon name="svg-spinners:ring-resize" size="24" />
        </template>
      </div>
    <div
      class="w-full h-full flex justify-center sm:p-10 sm:pb-40 sm:items-center max-sm:items-start p-0 m-0 max-sm:translate-y-[-5px]"
    >
      <UiAddCard />
    </div>
  </div>
</template>
