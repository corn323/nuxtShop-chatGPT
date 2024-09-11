import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to) => {
    const userStore = useUserStore()
    if (to.path !== '/login' && !userStore.isLoggedIn) {
      return navigateTo('/login')
    }
  })
})