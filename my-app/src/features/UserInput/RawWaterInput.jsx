import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { userInputRawWater } from "../RawWater/rawWaterSlice";

const RawWaterInput = () => {
  const dispatch = useDispatch();

  const [rawWaterTurbidityNTU, setrawWaterTurbidityNTU] = useState(0);
  const [rawWaterTOCPpm, setrawWaterTOCPpm] = useState(0);

  const handleNTU = (e) => {
    setrawWaterTurbidityNTU(e.target.valueAsNumber);
  };
  const handleTOC = (e) => {
    setrawWaterTOCPpm(e.target.valueAsNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawWaterProps = {
      rawWaterTurbidityNTU,
      rawWaterTOCPpm,
    };
    dispatch(
      userInputRawWater({
        ...rawWaterProps,
      })
    );
  };

  return (
    <Grid>
      <Typography>Enter Raw Water Properties </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
      >
        <TextField
          type="number"
          id="rawWaterTurbidityNTU"
          name="rawWaterTurbidityNTU"
          label="Turbidity"
          variant="outlined"
          value={rawWaterTurbidityNTU}
          onChange={handleNTU}
        ></TextField>
        <TextField
          type="number"
          id="rawWaterTOCPpm"
          name="rawWaterTOCPpm"
          label="TOC"
          variant="outlined"
          value={rawWaterTOCPpm}
          onChange={handleTOC}
        ></TextField>
      </Box>
      <button onClick={handleSubmit} type="submit">
        Add / Edit
      </button>
    </Grid>
  );
};

export default RawWaterInput;
