import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
// Recommended page imports
import Recommended from "./Recommended";
import LegPage from "./LegPage";
import ChestgPage from "./ChestPage";
import ArmPage from "./ArmPage";
import BackPage from "./BackPage";
// Chest imports
import BenchPress from "./Chest Stuff/BenchPress";
import CableCrossOver from "./Chest Stuff/CableCrossOver";
import ParallelBarDip from "./Chest Stuff/ParallelBarDip";
import PushUps from "./Chest Stuff/PushUps";
import PlankRotations from "./Chest Stuff/PlankRotations";
// Leg imports
import LegPress from "./Leg Stuff/LegPress";
import BulgarianSplitSquat from "./Leg Stuff/BulgarianSplitSquat";
import FrontSquat from "./Leg Stuff/FrontSquat";
import LegExtensions from "./Leg Stuff/LegExtensions";
// Arm imports
import HammerCurl from "./Arm Stuff/HammerCurl";
import BicepCurl from "./Arm Stuff/BicepCurl";
import TricepDips from "./Arm Stuff/TricepDips";
import OverheadTricepExtension from "./Arm Stuff/OverheadTricepExtension";
// Back imports
import Row from "./Back Stuff/Row";
import DeadLift from "./Back Stuff/Deadlift";
import SeatedCableRows from "./Back Stuff/SeatedCableRows";
import DumbbellRow from "./Back Stuff/DumbbellRow";
import ArmLegRaise from "./Back Stuff/ArmLegRaise";
import PlanPage from "./PlanPage";


function App() {
  return (
    <div>
      <Router>
        <div className="Route">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/leg" element={<LegPage />} />
            <Route path="/chest" element={<ChestgPage />} />
            <Route path="/arm" element={<ArmPage />} />
            <Route path="/back" element={<BackPage />} />
            <Route path="/plan" element={<PlanPage/>}/>
                        
            <Route path="/bench-press" element={<BenchPress />} />
            <Route path="/cable-crossover" element={<CableCrossOver />} />
            <Route path="/parallel-bar-dip" element={<ParallelBarDip />} />
            <Route path="/push-ups" element={<PushUps />} />
            <Route path="/plank-rotations" element={<PlankRotations />} />

            <Route path="/leg-press" element={<LegPress />} />
            <Route path="/bulgarian-split-squat" element={<BulgarianSplitSquat />} />
            <Route path="/front-squat" element={<FrontSquat />} />
            <Route path="/leg-extensions" element={<LegExtensions />} />

            <Route path="/hammer-curl" element={<HammerCurl />} />
            <Route path="/bicep-curl" element={<BicepCurl />} />
            <Route path="/tricep-dips" element={<TricepDips />} />
            <Route path="/overhead-tricep-extension" element={<OverheadTricepExtension />} />
            
            <Route path="/row" element={<Row />} />
            <Route path="/deadlift" element={<DeadLift />} />
            <Route path="/seated-cable-rows" element={<SeatedCableRows />} />
            <Route path="/dumbell-row" element={<DumbbellRow />} />
            <Route path="/arm-leg-raise" element={<ArmLegRaise />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
