<template>
  <header class="container mx-auto">
    <div
      class="duration-10 rounded-md text-slate-800 dark:color-slate-100 bg-gray-100 dark:bg-gray-500 px-1 mt-12 2xl:mx-50 xl:mx-40 lg:mx-20 md:mx-10 sm:mx-0 flex"
    >
      <h3 class="ml-3">Vue-Basic-Template</h3>
      <div class="flex-auto"></div>
      <div class="flex items-center mr-3">
        <button class="i-ic-outline-light-mode text-2xl cursor-pointer" @click="toggleTheme()" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<style lang="less" scoped></style>
