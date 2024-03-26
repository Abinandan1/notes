import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  noteId: null,
  method: null,
  archiveType: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.noteId = action.payload.id;
      state.method = action.payload.method;
      state.archiveType = action.payload.archiveType;
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
