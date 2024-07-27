<script setup lang="ts">
    import {tabs} from '@/const/const'

    const router = useRouter()
</script>

<template>
    <div class="max-sm:h-[10vh] max-sm:w-[100vw]                    sm:h-screen bg-slate-100 dark:bg-slate-900 sm:border-r max-sm:border-t border-slate-400 dark:border-slate-600 flex sm:flex-col justify-between sm:p-10">
        <NuxtLink to="/" class="max-sm:hidden">
            <div class="logo flex items-center gap-3">
                <img src="/public/favicon.ico" alt="" width="40" h="40">
                <h2 class="text-2xl font-medium">Nuxt</h2>
            </div>
        </NuxtLink>
        <div class="menu1 max-sm:w-[100vw] max-sm:h-[10vh] max-sm:justify-around flex sm:flex-col sm:gap-4 max-sm:items-center" >
            <NuxtLink :to="tab.path" v-for="(tab, index) in tabs" :key="index">
                <UButton block size="lg" variant="ghost" :color="router.currentRoute.value.path === tab.path ? 'blue' : 'gray'" class="flex justify-start hover:text-blue-500">
                    <div class="text-lg flex items-center gap-3"><UIcon :name="tab.icon" size="lg"/> <span class="max-sm:hidden">{{ tab.name }}</span></div>
                </UButton>
            </NuxtLink>
        </div>
        <div class="max-sm:hidden">
            <UiMoreModal />
        </div>
    </div>
</template>