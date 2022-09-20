import React from "react";
import RawWater from "./RawWater";
import { useSelector } from "react-redux";

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
    </section>
  );
};

export default RawWaterWrapper;
