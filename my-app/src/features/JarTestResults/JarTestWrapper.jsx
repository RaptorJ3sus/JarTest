import React from "react";
import JartestResults from "./JarTestResults";
import { useSelector } from "react-redux";

const JarTestWrapper = () => {
  const { dosage } = useSelector((store) => store.dosage);
  return (
    <section>
      <header>
        <h2>Jar Test Results</h2>
      </header>
      <div>
        {dosage.map((dosage) => {
          return <JartestResults key={dosage.dosageId} {...dosage} />;
        })}
      </div>
    </section>
  );
};

export default JarTestWrapper;
