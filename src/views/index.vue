<script setup lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue'
import { useAppStore } from '/@/store/modules/app'
import Header from '../components/Header/index.vue'
const appStore = useAppStore()
</script>

<template>
  <div class="dark:bg-black overflow-hidden">
    <Header />
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mb-4 text-4xl tracking-tight font-blimone sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-200"
        >
          123456
          <span
            class="absolute text-2xl tracking-wide version lg:text-4xl bg-gradient-to-br from-fuchsia-500 to-purple-600"
            >1.0.0</span
          >
        </h1>
        <p class="text-2xl text-slate-800 dark:text-slate-400">
          最新Vue3技术流，超全配置，大厂协作规范，大佬必备神器
        </p>
      </div>
    </main>
    <HelloWorld :msg="appStore.title" />
  </div>
</template>
