<script setup lang="ts">


const isLike = ref(false);
const isDislike = ref(false);

const onLike = () => {
  if (isDislike.value) {
   isDislike.value = !isDislike.value 
   isLike.value = !isLike.value
  } else {
    isLike.value = !isLike.value
  }
}

const onDislike = () => {
  if(isLike.value) {
   isLike.value = !isLike.value 
   isDislike.value = !isDislike.value
  } else {
    isDislike.value = !isDislike.value
  }
  
}
</script>


<template>
  <div class="user mb-4">
    <div class="flex items-start">
      <UAvatar alt="M" size="md" class="mr-4" />
      <div>
        <div class="flex items-center gap-2">
          <NuxtLink to="/profile">
            <span class="font-semibold">@muhammadali0210</span>
          </NuxtLink>
          <span class="text-sm text-slate-700 dark:text-slate-200">- 1 day ago</span>
        </div>
        <div class="flex items-center gap-2 mt-2 text-slate-700 dark:text-slate-200">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat, quo
            hic tenetur quisquam, velit quibusdam quod quia quae temporibus vitae adipisci
            ipsam.
          </p>
        </div>
        <div class="flex items-center justify-start pl-0 gap-4 mt-2">
            <UIcon @click="onLike" name="mdi:thumb-up" size="18" :class="{'text-blue-400': isLike}" class="cursor-pointer" />
            <UIcon @click="onDislike" name="mdi:thumb-down" size="18" :class="{'text-red-400': isDislike}" class="cursor-pointer"/>
            <span class="text-gray-500 text-sm italic">23k</span>
        </div>
      </div>
    </div>
  </div>
</template>
