<script setup lang="ts">
const messages = [
  { type: "received", createdAt: "10:30", text: "Hello" },
  { type: "sent", createdAt: "10:33", text: "Hi" },
  { type: "received", createdAt: "10:35", text: "How are you?" },
  { type: "sent", createdAt: "10:36", text: "I am fine" },
  { type: "received", createdAt: "10:37", text: "What is your name?" },
  { type: "sent", createdAt: "10:38", text: "Nematjonov" },
  { type: "received", createdAt: "10:39", text: "Nice to meet you" },
  { type: "sent", createdAt: "10:40", text: "Same to you" },
  { type: "received", createdAt: "10:41", text: "What do you do?" },
  { type: "sent", createdAt: "10:42", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta maiores " },
];
</script>

<template>
  <div>
    <li
      class="w-full h-[10vh] flex justify-between items-center gap-0 mb-0 p-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-400 dark:border-slate-600"
    >
      <div class="flex items-center gap-2">
        <NuxtLink to="/message">
          <div class="cursor-pointer">
            <UIcon name="material-symbols:arrow-back-rounded" size="24" />
          </div>
        </NuxtLink>
        <UAvatar
          src=".//public/user.avif"
          alt="M"
          size="lg"
          class="mr-4"
          chip-color="primary"
          chip-position="top-right"
        />

        <div class="flex flex-col items-start gap-0">
          <span class="font-semibold text-gray-700 dark:text-slate-200"
            >@nematjonov_0210</span
          >
          <span class="text-sm text-slate-600 dark:text-slate-400">1 day ago</span>
        </div>
      </div>

      <div>
        <UIcon name="ri:more-2-fill" />
      </div>
    </li>
    <div class="h-[90vh] relative p-0">
      <div class="w-full max-h-[80vh] h-full overflow-y-auto p-4">
        <div
          class="w-full flex flex-col"
          v-for="(message, index) in messages"
          :key="index"
          :class="[{
            'items-end': message.type == 'sent',
          }, {
            'items-start': message.type == 'received'
          }]"
        >
          <div
            class="inline-block max-w-[80%] px-2 py-1 mb-1" 
            :class="[
                {'dark:bg-gray-300': message.type == 'received'},
                {'bg-gray-400': message.type == 'received'},
                {'dark:bg-green-400': message.type == 'sent'},
                {'bg-green-400': message.type == 'sent'},
            ]"
            style="border-radius: 14px"
          >
            <div class="text-slate-800 text-lg m-0">
              {{ message.text }}
            </div>
          </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ message.createdAt }}
            </div>
        </div>
      </div>
      <div
        class="bg-slate-100 dark:bg-gray-900 flex gap-2 w-full absolute bottom-0 right-0 left-0 p-4"
      >
        <UInput size="lg" placeholder="Enter your message" class="w-full" />
        <UButton
          size="lg"
          icon="mingcute:send-line"
          class="w-[100px] text-center flex items-center justify-center text-white"
        />
      </div>
    </div>
  </div>
</template>
