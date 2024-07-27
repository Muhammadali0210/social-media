<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
})

const router = useRouter();
const sideBar = ref(true);

watch(
  () => router.currentRoute.value.path,
  () => {
    if (router.currentRoute.value.path === '/chat' && window.innerWidth < 640) {
      sideBar.value = false
    } else {
      sideBar.value = true
    }
  }
)
</script>

<template>
  <div class="flex h-[100vh] overflow-hidden w-full bg-slate-100 dark:bg-slate-900 justify-between max-sm:flex-col max-sm:relative">
        <div v-if="sideBar" class="content1 w-[500px] max-sm:w-full max-sm:absolute max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:z-50">
            <LayoutsSidebar />
        </div>
        <div class="content2 w-full max-sm:h-[100vh] bg-slate-300 dark:bg-slate-800 max-sm:w-full">
          <slot />
        </div>
        <div class="content3 w-[500px] max-sm:hidden">
            <LayoutsNews />
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 998px) {
  .content1{
    max-width: 250px;
  }
  .content3{
    display: none;
  }
}
</style>