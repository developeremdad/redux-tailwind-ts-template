import { createSlice } from "@reduxjs/toolkit";

export type TCounterState = {
  count: number;
};

const initialState: TCounterState = {
  count: 0,
};

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = countersSlice.actions;
export default countersSlice.reducer;
