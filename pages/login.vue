<template>
    <div>
        <h1>登入</h1>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="用戶名">
            <input v-model="password" type="password" placeholder="密碼">
            <button type="submit">登入</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const router = useRouter()

const username = ref('');
const password = ref('');

const login = async () => {
    // 在這裡添加登入邏輯
    // 假設登入成功
    userStore.setToken('your-token-here')
    router.push('/')
}
</script>