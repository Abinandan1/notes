import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  noteId: null,
  method: null,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.noteId = action.payload.id;
      state.method = action.payload.method;
      state.message = action.payload.message;
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
