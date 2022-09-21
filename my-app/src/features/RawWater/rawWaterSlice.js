import { createSlice } from "@reduxjs/toolkit";
import rawWater from "../../data/rawWater";

const initialState = {
  rawWater: rawWater,
};

const rawWaterSlice = createSlice({
  name: "rawWater",
  initialState,
  reducers: {
    userInputRawWater: (state, action) => {
      state.rawWater = state.rawWater.map((rawWaterInfo) => {
        return {
          ...rawWaterInfo,
          rawWaterTurbidityNTU: action.payload.rawWaterTurbidityNTU,
          rawWaterTOCPpm: action.payload.rawWaterTOCPpm,
        };
      });
    },
  },
});

export default rawWaterSlice.reducer;
export const { userInputRawWater } = rawWaterSlice.actions;

//dont forget to export the actions when they are included
