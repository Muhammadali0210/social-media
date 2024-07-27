<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  email: undefined,
  password: undefined,
});
</script>

<template>
  <div class="h-screen">
    <UiNavbar name="Create" />
    <div
      class="w-full h-full flex justify-center sm:p-10 sm:pb-40 sm:items-center max-sm:items-start p-0 m-0 max-sm:translate-y-[-5px]"
    >
      <UiAddCard />
    </div>
  </div>
</template>
