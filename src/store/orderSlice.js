import { createSlice } from '@reduxjs/toolkit';
const initialOrdersState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialOrdersState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    onDelete(state, action) {
      const newFilters = state.orders.filter(
        (item) => item.id !== action.payload.id
      );
      state.orders = newFilters;
    },
  },
});
export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
