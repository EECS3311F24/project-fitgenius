import { useNavigate } from "react-router-dom";


/**This component renders a navigation interface that allows users to 
 * navigate back to different exercise-related pages in the application.  */
function ChestPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="ChestName">Chest</h1>
      <ul className="ChestList">
        <li>
          <button className="exercise-button" onClick={() => navigate("/bench-press")}>Bench Press</button>
        </li>
        <li>
          <button className="exercise-button" onClick={() => navigate("/cable-crossover")}>
            Cable Crossover
          </button>
        </li>
        <li>
          <button className="exercise-button" onClick={() => navigate("/parallel-bar-dip")}>
            Parallel Bar Dip
          </button>
        </li>
        <li>
          <button className="exercise-button" onClick={() => navigate("/push-ups")}>Push Ups</button>
        </li>
        <li>
          <button className="exercise-button" onClick={() => navigate("/plank-rotations")}>
            Plank Rotations
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ChestPage;
