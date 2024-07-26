<template>
    <div class="w-[400px] h-screen bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-600 flex flex-col justify-between p-10">
        <div class="logo flex items-center gap-3">
            <img src="/public/favicon.ico" alt="" width="40" h="40">
            <h2 class="text-2xl font-medium">Nuxt</h2>
        </div>
        <div class="menu w-full flex flex-col gap-4">
                <UButton block size="lg" variant="solid" color="blue" class="flex justify-start">
                    <div class="text-lg"><UIcon name="mdi:home" /> Home</div>
                </UButton>
        </div>
        <div>
            more
        </div>
    </div>
</template>