<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { name } = storeToRefs(userStore)
</script>

<template>
  <div class="page-example">
    <svg-icon name="logo" color="black" />
    <p>This is a vite project template by {{ name }}</p>
  </div>
</template>