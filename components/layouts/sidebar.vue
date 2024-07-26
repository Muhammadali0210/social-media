<script setup lang="ts">
    import {tabs} from '@/const/const'

    const router = useRouter()
</script>

<template>
    <div class="h-screen bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-600 flex flex-col justify-between p-10">
        <NuxtLink to="/">
            <div class="logo flex items-center gap-3">
                <img src="/public/favicon.ico" alt="" width="40" h="40">
                <h2 class="text-2xl font-medium">Nuxt</h2>
            </div>
        </NuxtLink>
        <div class="menu w-full flex flex-col gap-4">
            <NuxtLink :to="tab.path" v-for="(tab, index) in tabs" :key="index">
                <UButton block size="lg" variant="ghost" :color="router.currentRoute.value.path === tab.path ? 'blue' : 'gray'" class="flex justify-start hover:text-blue-500">
                    <div class="text-lg flex items-center gap-3"><UIcon :name="tab.icon" /> {{ tab.name }}</div>
                </UButton>
            </NuxtLink>
        </div>
        <UiMoreModal />
    </div>
</template>