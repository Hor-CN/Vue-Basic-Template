import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    title: 'Vue-Basic-Template,一个开箱即用的 Vue3 + Vite模板',
  }),
  getters: {},
})
