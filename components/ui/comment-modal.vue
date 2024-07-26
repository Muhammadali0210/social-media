<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <div @click="isOpen = true" class="flex items-center gap-1">
      <UIcon size="21" name="mdi:comment-outline" class="cursor-pointer"/>
      <span class="text-sm text-slate-700 dark:text-slate-200">2.7k</span>
    </div>

    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" class="min-h-[90vh] pb-[20px ]" >
        <template #header>
          <div class="flex items-center justify-between top-0 left-0 right-0">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Comments
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <div class="max-h-[68vh] overflow-y-auto pb-5 pr-2" >
          <UiCommentItem  v-for="(item, index) in 10" :key="index"/>
        </div>

        <div class="flex gap-2 w-full absolute bottom-0 right-0 left-0 p-4">
          <UInput size="lg" placeholder="Enter your comment" class="w-full" />
          <UButton size="lg" icon="mingcute:send-line" class="w-[100px] text-center flex items-center justify-center text-white" /> 
        </div>
      </UCard>
    </UModal>
  </div>
</template>


<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #b8bcc4;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #2c3852;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #242f46;
}
</style>