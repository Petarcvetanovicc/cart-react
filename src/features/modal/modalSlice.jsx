import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
      console.log('open')
    },
    closeModal: (state) => {
      state.isOpen = false
      console.log('close')
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
