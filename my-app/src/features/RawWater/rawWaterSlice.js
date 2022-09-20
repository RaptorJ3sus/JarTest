import { createSlice } from "@reduxjs/toolkit";
import rawWater from "../../data/rawWater";

const initialState = {
  rawWater: rawWater,
};

const rawWaterSlice = createSlice({
  name: "rawWater",
  initialState,
  reducers: {},
});

export default rawWaterSlice.reducer;

//dont forget to export the actions when they are included
