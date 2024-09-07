import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

export const getProductItems = createAsyncThunk('cart/getItems', () => {
  return fetch(url).then((response) => response.json())
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = []
      console.log('clear')
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cart = state.cart.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const itemId = action.payload
      const singleProduct = state.cart.find((item) => item.id === itemId)
      singleProduct.amount = singleProduct.amount + 1
    },
    decrease: (state, action) => {
      const itemId = action.payload
      const singleProduct = state.cart.find((item) => item.id === itemId)
      singleProduct.amount = singleProduct.amount - 1
    },
    calculateTotals: (state) => {
      let totalAmount = 0
      let totalPrice = 0

      state.cart.forEach((item) => {
        totalAmount += item.amount
        totalPrice += item.amount * item.price
      })

      state.amount = totalAmount
      state.total = totalPrice
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cart = action.payload
      })
      .addCase(getProductItems.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions

export default cartSlice.reducer
