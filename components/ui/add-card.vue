<script setup lang="ts">


const isImg = ref(false);
</script>

<template>
  <UCard  class="z-5 sm:h-min sm:max-w-[600px] w-full p-0 m-0 max-sm:w-full max-sm:h-full">
    <div class="w-full flex gap-2">
      <div class="w-full">
        <div class="flex justify-between items-center mb-3">
            <div class="cursor-pointer flex gap-2">
              <div>
                <UAvatar alt="M" size="lg" />
              </div>
              <div>
                <div class="text-md dark:text-white text-dark font-bold">Muhammadali</div>
                <div class="text-sm dark:text-gray-500 text-gray-500">@muhammadali0210</div>
              </div>
            </div>
        </div>
        
        <UTextarea placeholder="What's news?" ></UTextarea>
        <template v-if="!isImg" >
            <div class="mt-3 flex relative w-[40px] cursor-pointer h-[40px]" @click="isImg = !isImg">
                <input type="file" style="width: 40px; height: 40px; opacity: 0; z-index: 10; cursor: pointer; position: absolute; ">
                <UIcon class="absolute z-5" name="material-symbols:add-photo-alternate-outline-rounded" size="40" />
            </div>
        </template>
        <template v-else>
            <div class="relative mt-5">
                <div class="absolute z-5 top-[-15px] right-[-15px] h-[30px] w-[30px] cursor-pointer" @click="isImg = !isImg">
                    <UIcon name="material-symbols:cancel" size="30" />
                </div>
            
                <div class="overflow-hidden mt-2 max-sm:max-h-[300px]" style="border-radius: 10px">
                    <img src="/public/img1.jpg" alt="Card img" width="100%" height="100%" style="z-index: 2;" />
                </div>
            </div>
        </template>

        
      </div>
    </div>
  </UCard>
</template>
<style scoped>
::-webkit-scrollbar{
  width: 0;
}
textarea{
    background-color: transparent;
}
.my-adder-textarea{
    width: 100%;
    height: auto;
    outline: none;
    border: none;
    background-color: transparent;
    border: 1px solid red;
}
</style>