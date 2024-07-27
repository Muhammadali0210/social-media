<script setup lang="ts">
import { profileTabs } from '~/const/const';
</script>


<template>
    <div class="h-screen overflow-hidden">
        <UiNavbar name="Profile" />
        <section class="w-full h-[90vh] flex flex-col items-start overflow-y-auto"> 


            <div class="border-b border-slate-200 dark:border-slate-600 bg-white dark:bg-gray-900 w-full p-5 m-0 flex justify-start gap-3">

                <div class="w-[120px] h-[120px] overflow-hidden"  style="border-radius: 100%; border: 3px solid green;">
                    <div class="w-full h-full overflow-hidden" style="border-radius: 100%; border: 3px solid white;">
                        <div class="w-full h-full overflow-hidden" style="border-radius: 100%; border: 1px solid gray;">
                            <img src="/public/user.avif" alt="User img" style="object-fit: cover; width: 100%; height: 100%;">
                        </div>
                    </div>
                </div>

                <div class="text-wrap">
                    <div class="text-xl font-bold">Muhammadali</div>
                    <div class="text-sm text-black dark:text-gray-400">@muhammadali0210</div> 
                    <NuxtLink to="/edit-profile">
                        <UButton  color="gray" variant="outline" class="text-sm mt-2 dark:hover:bg-inherit  dark:hover:text-white hover:text-black" >Edit profile</UButton>
                    </NuxtLink>
                </div>
                
            </div>
            <div class="w-full mt-0">
                <UTabs :items="profileTabs" class="w-full mt-0 border-none">
                    <template #icon="{ item, selected }">
                        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0 mr-2" :class="[selected && 'text-primary-500 dark:text-primary-400']" />
                    </template>
                    <template #all="{ item }">
                        <h1>All</h1>
                    </template>
                    <template #posts="{ item }">
                        <h1>post</h1>
                    </template>
                    <template #texts="{ item }">
                        <h1>texts</h1>
                    </template>
                </UTabs>
            </div>
            
        </section>
    </div>
</template>