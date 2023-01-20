import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {
  filters: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialCounterState,
  reducers: {
    addItem(state, action) {
      state.filters.push(action.payload);
    },
    itemDeleted(state, action) {
      const newFilters = state.filters.filter(
        (item) => item.id !== action.payload.id
      );
      state.filters = newFilters;
    },
    clearAll(state) {
      state.filters = [];
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
