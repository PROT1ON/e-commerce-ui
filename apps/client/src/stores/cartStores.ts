import { CartStoreActionsType, CartStoreStateType } from '@/components/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
       hasHydrated: false, 
      addtoCart: (product) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          )

          // Product variant already exists
          if (existingIndex !== -1) {
            const updatedCart = [...state.cart]

            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              quantity:
                updatedCart[existingIndex].quantity +
                (product.quantity || 1),
            }

            return {
              cart: updatedCart,
            }
          }

          // New product variant
          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity || 1,
              },
            ],
          }
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) =>
              !(
                p.id === product.id &&
                p.selectedSize === product.selectedSize &&
                p.selectedColor === product.selectedColor
              )
          ),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),

    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if(state) {
            state.hasHydrated = true
        }
      }
    }
  )
)

export default useCartStore