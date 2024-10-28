import { createSlice } from '@reduxjs/toolkit';

const slise = createSlice({
  name: 'contacts',

  initialState: {
    name: '',
  },

  reducers: {
    setFilterContact: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { setFilterContact } = slise.actions;
export default slise.reducer;
