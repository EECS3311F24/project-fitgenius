import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Recommended from "./Recommended";
import LegPage from "./LegPage";
import ChestgPage from "./ChestPage";
import ArmPage from "./ArmPage";
import BackPage from "./BackPage";
import BenchPress from "./Chest Stuff/BenchPress";
import CableCrossOver from "./Chest Stuff/CableCrossOver";
import ParallelBarDip from "./Chest Stuff/ParallelBarDip";
import PushUps from "./Chest Stuff/PushUps";
import PlankRotations from "./Chest Stuff/PlankRotations";
import LegPress from "./Leg Stuff/LegPress";
import BulgarianSplitSquat from "./Leg Stuff/BulgarianSplitSquat";
import FrontSquat from "./Leg Stuff/FrontSquat";
import LegExtensions from "./Leg Stuff/LegExtensions";

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

            <Route path="/bench-press" element={<BenchPress />} />
            <Route path="/cable-crossover" element={<CableCrossOver />} />
            <Route path="/parallel-bar-dip" element={<ParallelBarDip />} />
            <Route path="/push-ups" element={<PushUps />} />
            <Route path="/plank-rotations" element={<PlankRotations />} />

            <Route path="/leg-press" element={<LegPress />} />
            <Route
              path="/bulgarian-split-squat"
              element={<BulgarianSplitSquat />}
            />

            <Route path="/front-squat" element={<FrontSquat />} />

            <Route path="/leg-extensions" element={<LegExtensions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
