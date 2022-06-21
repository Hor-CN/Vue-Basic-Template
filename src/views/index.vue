<script setup lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue'
import { useAppStore } from '/@/store/modules/app'
const appStore = useAppStore()
</script>

<template>
  <HelloWorld :msg="appStore.title" />
</template>
