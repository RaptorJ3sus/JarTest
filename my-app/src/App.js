import "./App.css";
import TrainWrapper from "./features/trains/TrainWrapper";
import TankWrapper from "./features/tanks/TankWrapper";
import UserInput from "./features/UserInput/UserInput";
import ConsumerWrapper from "./features/consumers/ConsumerWrapper";
import SimulatorFunction from "./features/Simulator/SimulatorFunction";
import RawWaterWrapper from "./features/RawWater/RawWaterWrapper";
import DosageWrapper from "./features/Dosage/DosageWrapper";
import JarTestWrapper from "./features/JarTestResults/JarTestWrapper";
import JartestResultsFunction from "./Functions/JartestResultsFunction";
function App() {
  return (
    <div className="App">
      <RawWaterWrapper />
      <DosageWrapper />
      <JarTestWrapper />
      <JartestResultsFunction />
      <UserInput />
      <TrainWrapper />
      <TankWrapper />
      <ConsumerWrapper />
      <SimulatorFunction />
    </div>
  );
}

export default App;
