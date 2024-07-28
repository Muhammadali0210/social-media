<script setup lang="ts">
const router = useRouter();

const onChat = () => {
  router.push("/chat");
};
</script>

<template>
  <div>
    <div
      class="h-[80px] z-50 flex justify-between items-center p-5 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-400 dark:border-slate-600"
    >
      <div class="flex items-center gap-2 text-lg">
        <div class="cursor-pointe">
          <UIcon name="material-symbols:arrow-back-rounded" color="white" size="24" />
        </div>
        <div class="text-lg font-medium pb-1">Messages</div>
      </div>

      <div class="cursor-pointer">
        <UIcon name="mdi:search" size="24" />
      </div>
    </div>
    <div class="h-[90vh]">
      <ul class="mt-0 w-full h-[90vh] overflow-y-auto p-3 bg-slate-200 dark:bg-slate-900">
        <li
          @click="onChat"
          v-for="(item, index) in 20"
          :key="index"
          style="border-radius: 18px"
          class="w-full flex  justify-between items-center bg-white dark:bg-slate-700  mb-2 p-3 hover:bg-slate-400 dark:hover:bg-slate-700 cursor-pointer"
        >
          <div class="flex items-center gap-2">
            <UAvatar src=".//public/user.avif" alt="M" size="lg" class="mr-4" />

            <div class="flex flex-col items-start gap-0">
              <span class="font-semibold text-gray-700 dark:text-slate-200"
                >@nematjonov_0210</span
              >
              <span class="text-sm text-slate-600 dark:text-slate-400">1 day ago</span>
            </div>
          </div>

          <div>
            <UIcon name="ri:more-2-fill" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
