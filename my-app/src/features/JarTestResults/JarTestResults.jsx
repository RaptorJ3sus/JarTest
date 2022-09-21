import React from "react";
import { Grid } from "@mui/material";

const JartestResults = ({
  speedOfFormation,
  flocSize,
  turbidityRemoval,
  tocRemoval,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        Formation - {speedOfFormation}
      </Grid>
      <Grid item xs={3}>
        Size - {flocSize}
      </Grid>
      <Grid item xs={3}>
        NTU Removal - {turbidityRemoval} %
      </Grid>
      <Grid item xs={3}>
        TOC Removal- {tocRemoval} %
      </Grid>
    </Grid>
  );
};

export default JartestResults;
