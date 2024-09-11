<template>
    <div v-if="userStore.isAdmin">
      <h1>上傳商品</h1>
      <!-- 上傳表單 -->
    </div>
    <div v-else>
      <p>您沒有權限訪問此頁面</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useUserStore } from '../stores/user'
  
  const userStore = useUserStore()
  </script>