import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null as string | null,
    isAdmin: false,
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.token = null
      this.isAdmin = false
    },
    setAdmin(isAdmin: boolean) {
      this.isAdmin = isAdmin
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token
  }
})