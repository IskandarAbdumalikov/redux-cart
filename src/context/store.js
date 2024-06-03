import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import textSlice from './slice/textSlice'
import wishlistSlice from './slice/wishlistSlice'
import cartSlice from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    text: textSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
})