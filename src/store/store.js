import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import orderSlice from './orderSlice';
const store = configureStore({
  reducer: { filter: filterSlice, order: orderSlice },
});
export default store;
