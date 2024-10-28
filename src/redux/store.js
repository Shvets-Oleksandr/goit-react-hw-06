import { configureStore } from '@reduxjs/toolkit';

import initialContacts from '../contacts.json';

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact': {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case 'contact/deleteContact': {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            item => item.id !== action.payload
          ),
        },
      };
    }
    case 'contact/setFilterContact': {
      return {
        ...state,
        filters: { name: action.payload },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
