import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  actions: {
    addItem(item: CartItem) {
      this.items.push(item)
    },
    removeItem(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }
})