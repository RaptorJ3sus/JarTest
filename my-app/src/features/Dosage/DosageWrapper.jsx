import React from "react";
import Dosage from "./Dosage";
import { useSelector } from "react-redux";

const DosageWrapper = () => {
  const { dosage } = useSelector((store) => store.dosage);
  return (
    <section>
      <header>
        <h2>Product Concentrations</h2>
      </header>
      <div>
        {dosage.map((dosage) => {
          return <Dosage key={dosage.dosageId} {...dosage} />;
        })}
      </div>
    </section>
  );
};

export default DosageWrapper;
