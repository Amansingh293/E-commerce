import { configureStore } from '@reduxjs/toolkit'
import cart from './Slices/cart'

export default configureStore({
  reducer: {
    cart
  }
})