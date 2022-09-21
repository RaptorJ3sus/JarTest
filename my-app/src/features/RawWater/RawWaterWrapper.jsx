import React from "react";
import RawWater from "./RawWater";
import { useSelector } from "react-redux";
import RawWaterInput from "../UserInput/RawWaterInput";

const RawWaterWrapper = () => {
  const { rawWater } = useSelector((store) => store.rawWater);
  return (
    <section>
      <header>
        <h2>Raw Water</h2>
      </header>
      <div>
        {rawWater.map((rawWater) => {
          return <RawWater key={rawWater.rawWaterId} {...rawWater} />;
        })}
      </div>
      <div>
        <RawWaterInput />
      </div>
    </section>
  );
};

export default RawWaterWrapper;
