import React from "react";
import { useSelector } from "react-redux";
import { jarTestResults } from "../features/Dosage/dosageSlice";
import { useDispatch } from "react-redux";

const JartestResultsFunction = () => {
  const dispatch = useDispatch();
  const { dosage } = useSelector((store) => store.dosage);
  const { rawWater } = useSelector((store) => store.rawWater);

  const runjartest = () => {
    dosage.map((dosage) => {
      const rawWaterInfo = rawWater.find((info) => {
        return info.rawWaterId === 1;
      });
      const updatedTurbidityRemoval =
        (dosage.turbidity / rawWaterInfo.rawWaterTurbidityNTU) * 100;
      const updatedTocRemoval =
        (dosage.toc / rawWaterInfo.rawWaterTOCPpm) * 100;
      const updatedTocRemovalEx = updatedTocRemoval.toFixed(2);
      const updatedTurbidityRemovalEx = updatedTurbidityRemoval.toFixed(2);

      dispatch(
        jarTestResults({
          dosageId: dosage.dosageId,
          turbidityRemoval: updatedTurbidityRemovalEx,
          tocRemoval: updatedTocRemovalEx,
        })
      );
      return { ...dosage };
    });
  };
  return (
    <div>
      <h2>Findings</h2>

      <button onClick={() => runjartest()}>Run</button>
    </div>
  );
};

export default JartestResultsFunction;
