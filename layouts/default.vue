<template>
    <div>
      <nav>
        <NuxtLink to="/">首頁</NuxtLink>
        <NuxtLink v-if="!userStore.isLoggedIn" to="/login">登入</NuxtLink>
        <a v-else @click="logout" href="#">登出</a>
        <NuxtLink v-if="userStore.isAdmin" to="/upload">上傳</NuxtLink>
      </nav>
      <slot />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useUserStore } from '../stores/user'
    
  const userStore = useUserStore()
  
  const logout = () => {
    userStore.logout()
    // 可能需要重定向到首頁
  }
  </script>