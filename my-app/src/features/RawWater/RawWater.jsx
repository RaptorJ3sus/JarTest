import React from "react";
import { Grid } from "@mui/material";

const RawWater = ({ rawWaterTurbidityNTU, rawWaterTOCPpm }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        Turbidity - {rawWaterTurbidityNTU} NTU
      </Grid>
      <Grid item xs={6}>
        TOC- {rawWaterTOCPpm} PPM
      </Grid>
    </Grid>
  );
};

export default RawWater;
