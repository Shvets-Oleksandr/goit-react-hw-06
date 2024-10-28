import { createSlice } from '@reduxjs/toolkit';

import initialContacts from '../contacts.json';

const slise = createSlice({
  name: 'contacts',

  initialState: {
    items: initialContacts,
  },

  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slise.actions;
export default slise.reducer;
