<script setup lang="ts">

const state = reactive({
  email: undefined,
  password: undefined
})
</script>

<template>
    <div class="h-screen p-0">
        <UiNavbar name="Create" />
        <dir class="w-full h-full flex justify-center sm:p-10 sm:pb-40   sm:items-center max-sm:items-start p-0 m-0 max-sm:translate-y-[-10px]">
            <UiAddCard />
        </dir>
    </div>
</template>