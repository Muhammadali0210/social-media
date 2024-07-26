<script setup lang="ts">
import { moreModal } from '~/const/const';
</script>

<template>
  <UDropdown :items="moreModal" :popper="{ placement: 'bottom-start' }">
    <div class="flex items-center gap-3 cursor-pointer">
      <UIcon name="ic:round-menu" size="24" /> <span class="text-sm">More</span>
    </div>
  </UDropdown>
</template>
