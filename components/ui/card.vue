<script setup lang="ts">
import { cardBar } from "~/const/const";


const isLike = ref(false);
const isBookmark = ref(false);

</script>

<template>
  <UCard class="h-min max-w-[600px] p-0">
    <div class="flex justify-between gap-2">
      <div>
        <div class="flex justify-between items-center mb-3">
          <NuxtLink to="/profile">
            <div class="cursor-pointer flex gap-2">
              <div>
                <UAvatar alt="M" size="lg" />
              </div>
              <div>
                <div class="text-md dark:text-white text-dark font-bold">Muhammadali</div>
                <div class="text-sm dark:text-gray-500 text-gray-500">@muhammadali0210</div>
              </div>
            </div>
          </NuxtLink>
          <div class="cursor-pointer">
            <UDropdown :items="cardBar" :popper="{ placement: 'bottom-start' }">
              <UIcon name="ri:more-fill" size="22" />
            </UDropdown>
          </div>
        </div>
        <div class="text-sm text-slate-700 dark:text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sint soluta
          voluptate reprehenderit fugit magni molestiae dolore vero aspernatur, voluptatem
          quasi
        </div>
        <div class="overflow-hidden mt-2" style="border-radius: 10px">
          <img src="/public/img1.jpg" alt="Card img" width="100%" height="100%" />
        </div>
        <div class="mt-3 flex justify-between">
          <div class="flex gap-3">
            <div class="flex items-center gap-1">
              <div @click="isLike = !isLike" class="cursor-pointer">
                <UIcon size="22" v-if="isLike" name="mdi:heart" class="text-red-500" />
                <UIcon size="22" v-else name="mdi:heart-outline" />
              </div>
              <span class="text-sm text-slate-700 dark:text-slate-200">2.7k</span>
            </div>
            <div>
                <UiCommentModal />
            </div>
          </div>
          <div @click="isBookmark = !isBookmark" class="cursor-pointer">
            <UIcon v-if="!isBookmark" name="mdi:bookmark-outline" size="22" />
            <UIcon v-else name="mdi:bookmark" size="22" />
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
