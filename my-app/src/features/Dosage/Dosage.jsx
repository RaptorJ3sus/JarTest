import React from "react";
import { Grid } from "@mui/material";

const Dosage = ({ dosagePpm }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        Concentration - {dosagePpm} PPM
      </Grid>
    </Grid>
  );
};

export default Dosage;
