import { createSlice } from "@reduxjs/toolkit";
import dosage from "../../data/dosage";

const initialState = {
  dosage: dosage,
};

const dosageSlice = createSlice({
  name: "dosage",
  initialState,
  reducers: {
    jarTestResults: (state, action) => {
      state.dosage = state.dosage.map((dosageInfo) => {
        if (action.payload.dosageId === dosageInfo.dosageId)
          return {
            ...dosageInfo,
            turbidityRemoval: action.payload.turbidityRemoval,
            tocRemoval: action.payload.tocRemoval,
          };
        return dosageInfo;
      });
    },
  },
});

export default dosageSlice.reducer;
export const { jarTestResults } = dosageSlice.actions;

// dont forget to export the actions when they are included
