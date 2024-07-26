<script setup lang="ts">
// definePageMeta({
//   layout: '',
// })
</script>

<template>
    <div>
        <UiNavbar name="Profile" />
        <div class="w-full h-full flex flex-col items-start p-4"> 
            <dir class="border-b border-slate-200 dark:boreder-slate-600">
                <div class="w-[200px] h-[200px] overflow-hidden"  style="border-radius: 100%; border: 3px solid green;">
                    <div class="w-full h-full overflow-hidden" style="border-radius: 100%; border: 3px solid white;">
                        <div class="w-full h-full overflow-hidden" style="border-radius: 100%; border: 1px solid gray;">
                            <img src="/public/user.avif" alt="User img" style="object-fit: cover; width: 100%; height: 100%;">
                        </div>
                    </div>
                </div>
            
            </dir>
        </div>
    </div>
</template>